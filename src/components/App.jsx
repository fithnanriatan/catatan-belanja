import { useState } from "react";
import Headers from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

export default function App() {

  const [items, setItems] = useState(groceryItems)

  function handleAddItem(item) {
    setItems([...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item))
  }

  function handleClearItems() {
    setItems([])
  }

  return (
    <div className="app min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <Headers />

        <div className="p-6">
          <Form onAddItem={handleAddItem} />
          <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
          <Footer items={items} />
        </div>

      </div>
    </div>
  );
}
