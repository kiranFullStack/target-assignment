import React from "react"
import "./App.scss"
import Table from "./components/Table"
import SimpleModal from "./components/Modal"

function App() {
  const [NewProductObject, setNewProductObject] = React.useState({})
  const [rows, setRows] = React.useState([
    { productName: "Cupcake", calories: 305, fat: 0, carbs: 8, protein: 9 },
    { productName: "Cupcake2", calories: 305, fat: 0, carbs: 8, protein: 9 },
    { productName: "Cupcake3", calories: 305, fat: 0, carbs: 8, protein: 9 },
    { productName: "Cupcake4", calories: 305, fat: 0, carbs: 8, protein: 9 },
    { productName: "Cupcake5", calories: 305, fat: 0, carbs: 8, protein: 9 }
  ])

  React.useEffect(() => {
    if (Object.keys(NewProductObject).length !== 0) {
      setRows([...rows, NewProductObject])
    }
  }, [NewProductObject])

  return (
    <div className="container">
      <h1>Target CRUD assignment</h1>
      <SimpleModal setNewProductObject={setNewProductObject} />
      <Table rows={rows} />
    </div>
  )
}

export default App
