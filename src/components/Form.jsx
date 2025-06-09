import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if (!name) return;

    const newItem = { name, qty, checked: false, id: Date.now() }
    onAddItem(newItem)
    console.log(newItem);
    setName('')
    setQty(1)
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>{i + 1}</option>
  ))

  return (
    <form className="add-form mb-6" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Hari ini belanja apa kita?
      </h3>
      <div className="flex gap-2 mb-4">
        <select value={qty} onChange={(e) => setQty(Number(e.target.value))} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
        Tambah
      </button>
    </form>
  )
}