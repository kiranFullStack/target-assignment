import React, { useState, useEffect } from "react"
import "./App.scss"
import SimpleModal from "./components/Modal"
import MUIDataTable from "mui-datatables"

// offerPrice: 9,
// offerStartAt: 90,
// offerEndAt: 90,
// createdAt: 80,
// updatedAt: 80

function App() {
  const columns = [
    {
      name: "productName",
      label: "Name",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "productDescription",
      label: "Company",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "isActive",
      label: "City",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "price",
      label: "State",
      options: {
        filter: true,
        sort: true
      }
    }
  ]
  const data = [
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
  ]

  const options = {
    filterType: "checkbox"
  }

  const [NewProductObject, setNewProductObject] = useState({})

  return (
    <div className="container">
      <h1>Target CRUD assignment</h1>
      <MUIDataTable
        title={"Target Product List"}
        data={data}
        columns={columns}
        options={options}
      />
      <SimpleModal setNewProductObject={setNewProductObject} />
    </div>
  )
}

export default App
