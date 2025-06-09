export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
      />
      <span className={`flex-1 ${item.checked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="w-8 h-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full flex items-center justify-center transition-colors">
        ×
      </button>
    </li>
  )
}