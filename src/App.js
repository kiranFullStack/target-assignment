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
        <p className="desc-para">
          CRUD Assignment with Listing all products, Sorting each feild by
          clicking on header, Filtering the feilds dynamically and reset,
          Pagination and Rows per page setting, Multiple products select with
          batch delete and fetching data from mock backend (
          <a
            href="https://github.com/kiranFullStack/target-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>👉🏼</span> Backend Code
          </a>
          ) (
          <a
            href="https://github.com/kiranFullStack/target-assignment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>👉🏼</span> Frontend Code
          </a>
          ) )
        </p>
        <SimpleModal setNewProductObject={setNewProductObject} />
        <MUIDataTable
          title={"Target Product List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
      <span className="footer-info">
        Made by Kiran -<a href="www.kiranfullstack.com">kiranfullstack.com</a>
      </span>
    </>
  )
}

export default App
