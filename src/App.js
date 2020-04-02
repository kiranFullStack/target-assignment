import React, { useState, useEffect } from "react"
import "./App.scss"
import SimpleModal from "./components/Modal"
import MUIDataTable from "mui-datatables"
import axios from "axios"
import MenuAppBar from "./components/MenuAppBar"

// import CustomBodyCell from "./components/CustomBodyCell"

function App() {
  const [NewProductObject, setNewProductObject] = useState({})
  const [data, setData] = useState([])

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
      label: "Description",
      options: {
        filter: true,
        sort: true
      }
    },

    {
      name: "isActive",
      label: "Active",

      options: {
        filter: true,
        sort: true
      }
    },

    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true
      }
    },

    {
      name: "offerPrice",
      label: "Offer Price",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "offerStartAt",
      label: "Offer Start At",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "offerEndAt",
      label: "Offer End At",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "createdAt",
      label: "Created at",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "updatedAt",
      label: "Updated At",
      options: {
        filter: true,
        sort: true
      }
    }
  ]

  useEffect(() => {
    axios
      .get(`https://target-backend.herokuapp.com/`, { crossdomain: true })
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])

  useEffect(() => {
    console.log(NewProductObject, ";;")
    if (Object.keys(NewProductObject).length !== 0) {
      setData([NewProductObject, ...data])
    }
  }, [NewProductObject])

  const options = {
    filterType: "dropdown",
    responsive: "scroll"
  }

  return (
    <>
      <MenuAppBar />
      <div className="container">
        <h2>Description</h2>
        <p>
          CRUD Assignment
          <ul>
            <li>Listing all products</li>
            <li>Sorting each feild by cxlicking on header</li>
            <li>Filtering the feilds dynamically and reset</li>
            <li>Pagination and Rows per page setting</li>
            <li>Multiple products delete</li>
          </ul>
        </p>
        <SimpleModal setNewProductObject={setNewProductObject} />
        <MUIDataTable
          title={"Target Product List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </>
  )
}

export default App
