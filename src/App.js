import React from "react"
import "./App.scss"
import Table from "./components/Table"
import SimpleModal from "./components/Modal"

function App() {
  const [NewProductObject, setNewProductObject] = React.useState({})

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData("Cupcake", 305, 0, 67, 4.3),
    createData("Donut", 452, 0, 51, 4.9),
    createData("Eclair", 262, 0, 24, 6.0),
    createData("Frozen yoghurt", "Description", 0, 24, 4.0),
    createData("Gingerbread", 356, 0, 49, 3.9),
    createData("Honeycomb", 408, 3.2, 87, 6.5),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Jelly Bean", 375, 0.0, 94, 0.0),
    createData("KitKat", 518, 26.0, 65, 7.0),
    createData("Lollipop", 392, 0.2, 98, 0.0),
    createData("Marshmallow", 318, 0, 81, 2.0),
    createData("Nougat", 360, 19.0, 9, 37.0),
    createData("Oreo", 437, 18.0, 63, 4.0)
  ]

  console.log(NewProductObject, "from app.js")
  console.log(rows.length, "rows length")

  console.log(rows.push(NewProductObject), "rows")
  console.log(rows, "rows length")

  return (
    <div className="container">
      <h1>Target CRUD assignment</h1>
      <SimpleModal setNewProductObject={setNewProductObject} />
      <Table rows={rows} />
    </div>
  )
}

export default App
