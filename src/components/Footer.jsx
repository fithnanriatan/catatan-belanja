export default function Footer({items}) { 
  if(items.length === 0){
    return (
      <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-center text-blue-800 font-medium">
        Data belanja masih kosong...
      </p>
    </div>
    )
  }
  const totalItems = items.length;
  const checkItems = items.filter((item) => item.checked).length
  const persentage = Math.round(checkItems / totalItems * 100) 
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-center text-blue-800 font-medium">
        Ada {totalItems} barang di daftar belanjaan, {checkItems} barang sudah dibeli ({persentage}%)
      </p>
    </div>
  )
}