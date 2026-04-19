function Header({ total, completed }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Mis Tareas</h1>
      <p className="text-gray-500 mt-1">{completed} de {total} completadas</p>
    </div>
  )
}

export default Header