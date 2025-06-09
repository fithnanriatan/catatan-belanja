import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {

  const [sortBy, setSortBy] = useState('input')
  let sortedItems;

  switch (sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
      break;
    default:
      sortedItems = items
      break;
  }

  return (
    <>
      <div className="mb-6">
        <ul className="space-y-2">
          {
            sortedItems.map((item) => (
              <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
            ))
          }
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
          Bersihkan Daftar
        </button>
      </div>
    </>
  )
}