# Backend para MEAN Color App

## Objetivo
Este módulo maneja la lógica de servidor, incluyendo API REST para gestionar colores, y se conecta a MongoDB.

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB
- Docker

## Cómo Ejecutar
1. Asegúrate de tener Docker instalado.
2. Construye la imagen de Docker:
```
docker build -t mean-color-app-backend .
```
3. Ejecuta el contenedor de Docker:
```
docker run -p 3000:3000 --env-file .env mean-color-app-backend
```

## API Endpoints
- `GET /colors`: Devuelve una lista de todos los colores.
- `POST /colors`: Añade un nuevo color. 

## Licencia
Especifica aquí tu tipo de licencia.
