import React, { useState, useEffect } from "react"
import "./App.scss"
import SimpleModal from "./components/Modal"
import MUIDataTable from "mui-datatables"
import CustomBodyCell from "./components/CustomBodyCell"

function App() {
  const [NewProductObject, setNewProductObject] = useState({})
  const [data, setData] = useState([
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
    // {
    //   name: "isActive",
    //   label: "Active",
    //   options: {
    //     filter: true,
    //     sort: true
    //   }
    // },

    {
      name: "isActive",
      label: "Active",

      options: {
        filter: true,

        filterOptions: {
          names: ["Yes", "No"],
          logic(isActive, filterVal) {
            console.log(isActive)
            const show =
              (filterVal.indexOf("Yes") >= 0 && isActive) ||
              (filterVal.indexOf("No") >= 0 && !isActive)

            return !show
          }
        },
        customBodyRender: value => <CustomBodyCell value={!value} />,
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
  // : 9,
  // : 90,
  // : 90,
  // : 80,
  // : 80

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
    <div className="container">
      <h1>Target CRUD assignment</h1>
      <SimpleModal setNewProductObject={setNewProductObject} />

      <MUIDataTable
        title={"Target Product List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  )
}

export default App
