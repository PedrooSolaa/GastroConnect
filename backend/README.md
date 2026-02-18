# FastAPI de Platos (GastroConnect)

## 1) Crear entorno virtual

En PowerShell, desde la raíz del proyecto:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

## 2) Instalar dependencias

```powershell
pip install -r backend/requirements.txt
```

## 3) Ejecutar API

```powershell
uvicorn backend.main:app --reload --port 8000
```

## 4) Probar

- Swagger UI: http://127.0.0.1:8000/docs
- Health: http://127.0.0.1:8000/health
- Platos: http://127.0.0.1:8000/platos

La API usa `db.json` del proyecto y guarda los cambios sobre `recetas`.
