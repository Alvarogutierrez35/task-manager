const filters = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
]

function FilterBar({ filter, onFilter }) {
  return (
    <div className="flex gap-2 mb-4">
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onFilter(f.value)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            filter === f.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar