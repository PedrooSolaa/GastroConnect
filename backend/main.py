from __future__ import annotations

import json
from pathlib import Path
from typing import Literal

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


BASE_DIR = Path(__file__).resolve().parent.parent
DB_PATH = BASE_DIR / "db.json"


class PlatoBase(BaseModel):
    nombre: str = Field(min_length=1)
    categoria: Literal["entrantes", "primeros", "segundos", "postres"]
    ingredientes: list[str] = Field(default_factory=list)
    descripcion: str = Field(default="")
    precio: float = Field(gt=0)
    tiempo: int = Field(gt=0)
    dificultad: Literal["baja", "media", "alta"]
    imagen: str = Field(default="")


class PlatoCreate(PlatoBase):
    pass


class PlatoUpdate(BaseModel):
    nombre: str | None = Field(default=None, min_length=1)
    categoria: Literal["entrantes", "primeros", "segundos", "postres"] | None = None
    ingredientes: list[str] | None = None
    descripcion: str | None = None
    precio: float | None = Field(default=None, gt=0)
    tiempo: int | None = Field(default=None, gt=0)
    dificultad: Literal["baja", "media", "alta"] | None = None
    imagen: str | None = None


class Plato(PlatoBase):
    id: int


app = FastAPI(title="GastroConnect API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _read_db() -> dict:
    if not DB_PATH.exists():
        raise HTTPException(status_code=500, detail="No se encontró db.json")

    try:
        with DB_PATH.open("r", encoding="utf-8") as file:
            data = json.load(file)
    except json.JSONDecodeError as exc:
        raise HTTPException(status_code=500, detail="db.json no es válido") from exc

    if "recetas" not in data or not isinstance(data["recetas"], list):
        data["recetas"] = []

    return data


def _write_db(data: dict) -> None:
    with DB_PATH.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)


def _next_id(platos: list[dict]) -> int:
    return max((plato.get("id", 0) for plato in platos), default=0) + 1


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/platos", response_model=list[Plato])
def get_platos(categoria: str | None = Query(default=None)) -> list[dict]:
    data = _read_db()
    platos = data["recetas"]

    if categoria:
        platos = [plato for plato in platos if plato.get("categoria") == categoria]

    return platos


@app.get("/platos/{plato_id}", response_model=Plato)
def get_plato(plato_id: int) -> dict:
    data = _read_db()
    plato = next((p for p in data["recetas"] if p.get("id") == plato_id), None)

    if not plato:
        raise HTTPException(status_code=404, detail="Plato no encontrado")

    return plato


@app.post("/platos", response_model=Plato, status_code=201)
def create_plato(payload: PlatoCreate) -> dict:
    data = _read_db()
    platos = data["recetas"]

    new_plato = payload.model_dump()
    new_plato["id"] = _next_id(platos)

    platos.append(new_plato)
    _write_db(data)

    return new_plato


@app.put("/platos/{plato_id}", response_model=Plato)
def update_plato(plato_id: int, payload: PlatoUpdate) -> dict:
    data = _read_db()
    platos = data["recetas"]

    index = next((i for i, p in enumerate(platos) if p.get("id") == plato_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Plato no encontrado")

    plato = platos[index]
    updated_values = payload.model_dump(exclude_unset=True)
    plato.update(updated_values)

    platos[index] = plato
    _write_db(data)

    return plato


@app.delete("/platos/{plato_id}")
def delete_plato(plato_id: int) -> dict[str, str]:
    data = _read_db()
    platos = data["recetas"]

    index = next((i for i, p in enumerate(platos) if p.get("id") == plato_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Plato no encontrado")

    platos.pop(index)
    _write_db(data)

    return {"message": "Plato eliminado"}
