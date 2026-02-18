# API de Recetas - GastroConnect

## 🐍 Opción con FastAPI (Python)

Si prefieres usar FastAPI en lugar de `json-server`:

### 1. Crear entorno virtual
```bash
python -m venv .venv
.venv\Scripts\activate
```

### 2. Instalar dependencias
```bash
pip install -r backend/requirements.txt
```

### 3. Ejecutar FastAPI
```bash
uvicorn backend.main:app --reload --port 8000
```

### 4. Endpoints de platos
```
GET    http://127.0.0.1:8000/platos
GET    http://127.0.0.1:8000/platos/:id
POST   http://127.0.0.1:8000/platos
PUT    http://127.0.0.1:8000/platos/:id
DELETE http://127.0.0.1:8000/platos/:id
```

Documentación interactiva: `http://127.0.0.1:8000/docs`

### 5. Conectar el frontend a FastAPI

Crea un archivo `.env` en la raíz del proyecto con:

```bash
VITE_API_URL=http://127.0.0.1:8000
```

Después arranca el frontend con `npm run dev`.

## 🚀 Inicio Rápido

### 1. Iniciar la API
Abre una terminal y ejecuta:
```bash
npm run api
```
La API estará disponible en: `http://localhost:3001`

### 2. Iniciar la aplicación
Abre otra terminal y ejecuta:
```bash
npm run dev
```

## 📋 Endpoints Disponibles

### Obtener todas las recetas
```
GET http://localhost:3001/recetas
```

### Obtener una receta específica
```
GET http://localhost:3001/recetas/:id
```

### Obtener categorías
```
GET http://localhost:3001/categorias
```

### Filtrar recetas por categoría
```
GET http://localhost:3001/recetas?categoria=entrantes
GET http://localhost:3001/recetas?categoria=primeros
GET http://localhost:3001/recetas?categoria=segundos
GET http://localhost:3001/recetas?categoria=postres
```

## 🍽️ Recetas Incluidas

1. **Paella Valenciana** (Primeros) - 18.50€
   - Ingredientes: arroz, pollo, conejo, judías verdes, garrofón, azafrán

2. **Pulpo a la Gallega** (Entrantes) - 22.00€
   - Ingredientes: pulpo, patatas, pimentón, aceite de oliva, sal

3. **Solomillo al Pedro Ximénez** (Segundos) - 26.50€
   - Ingredientes: solomillo de ternera, vino Pedro Ximénez, cebolla, mantequilla, pimienta

4. **Tarta de Santiago** (Postres) - 6.50€
   - Ingredientes: almendras molidas, huevos, azúcar, ralladura de limón

## ✏️ Añadir más recetas

Puedes editar el archivo `db.json` para añadir más recetas. La estructura es:

```json
{
  "id": 5,
  "nombre": "Nombre del plato",
  "categoria": "entrantes|primeros|segundos|postres",
  "ingredientes": ["ingrediente1", "ingrediente2"],
  "descripcion": "Descripción del plato",
  "precio": 15.00,
  "tiempo": 30,
  "dificultad": "baja|media|alta",
  "imagen": "/img/foto.jpg"
}
```

## 🔧 Tecnologías

- **json-server**: API REST falsa para desarrollo
- **React**: Framework frontend
- **Vite**: Build tool
