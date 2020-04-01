import React, { useState, useEffect } from "react"
import "./App.scss"
import Table from "./components/Table"
import SimpleModal from "./components/Modal"

function App() {
  const [NewProductObject, setNewProductObject] = useState({})
  const [deletedItems, setDeletedItems] = useState("hi")
  const [rows, setRows] = useState([
    {
      productName: "Cupcake",
      productDescription: "This is the description",
      isActive: true,
      price: 8,
      offerPrice: 9,
      offerStartAt: 90,
      offerEndAt: 90,
      createdAt: 80,
      updatedAt: 80
    },
    {
      productName: "Cupcake2",
      productDescription: "This is the description",
      isActive: true,
      price: 8,
      offerPrice: 9,
      offerStartAt: 90,
      offerEndAt: 90,
      createdAt: 80,
      updatedAt: 80
    },
    {
      productName: "Cupcake3",
      productDescription: "This is the description",
      isActive: true,
      price: 8,
      offerPrice: 9,
      offerStartAt: 90,
      offerEndAt: 90,
      createdAt: 80,
      updatedAt: 80
    },
    {
      productName: "Cupcake4",
      productDescription: "This is the description",
      isActive: true,
      price: 8,
      offerPrice: 9,
      offerStartAt: 90,
      offerEndAt: 90,
      createdAt: 80,
      updatedAt: 80
    },
    {
      productName: "Cupcake5",
      productDescription: "This is the description",
      isActive: false,
      price: 8,
      offerPrice: 9,
      offerStartAt: 90,
      offerEndAt: 90,
      createdAt: 80,
      updatedAt: 80
    }
  ])

  useEffect(() => {
    if (Object.keys(NewProductObject).length !== 0) {
      setRows([...rows, NewProductObject])
    }
  }, [NewProductObject])

  console.log(deletedItems, "This is coming from App.js.....FUCK YEAH!!!")

  // console.log(deletedItems, "getting the deleted items from App.js")

  return (
    <div className="container">
      <h1>Target CRUD assignment</h1>
      <SimpleModal setNewProductObject={setNewProductObject} />
      <Table rows={rows} setDeletedItems={setDeletedItems} />
    </div>
  )
}

export default App
