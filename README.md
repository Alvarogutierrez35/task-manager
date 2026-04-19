# Task Manager

App de gestión de tareas construida con React y Tailwind CSS.

## Funcionalidades

- Agregar, completar y eliminar tareas
- Filtrar por estado: todas, pendientes y completadas
- Las tareas se guardan automáticamente en el navegador (localStorage)
- Diseño responsive y moderno

## Stack

- React 18
- Vite
- Tailwind CSS

## Cómo correrlo localmente

```bash
git clone https://github.com/Alvarogutierrez35/task-manager.git
cd task-manager
npm install
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Estructura del proyecto

```
src/
├── App.jsx           # Componente principal y manejo de estado
└── components/
    ├── Header.jsx    # Título y contador de tareas
    ├── TaskInput.jsx # Formulario para agregar tareas
    ├── FilterBar.jsx # Botones de filtro
    ├── TaskList.jsx  # Lista de tareas
    └── TaskItem.jsx  # Tarea individual
```
