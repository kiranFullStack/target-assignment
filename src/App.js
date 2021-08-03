import React, { useState, useEffect } from 'react'
import './App.scss'
import SimpleModal from './components/Modal'
import MUIDataTable from 'mui-datatables'
import axios from 'axios'
import MenuAppBar from './components/MenuAppBar'
import { css } from '@emotion/core'
import GridLoader from 'react-spinners/GridLoader'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

function App() {
    const [NewProductObject, setNewProductObject] = useState({})
    const [data, setData] = useState([])

    //
    // ─── COLUMNS FOR THE TABLE HEADER ───────────────────────────────────────────────
    //

    const columns = [
        {
            name: 'productName',
            label: 'Name',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'productDescription',
            label: 'Description',
            options: {
                filter: true,
                sort: true,
            },
        },

        {
            name: 'isActive',
            label: 'Active',

            options: {
                filter: true,
                sort: true,
            },
        },

        {
            name: 'price',
            label: 'Price($)',
            options: {
                filter: true,
                sort: true,
            },
        },

        {
            name: 'offerPrice',
            label: 'Offer Price($)',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'offerStartAt',
            label: 'Offer Start At',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'offerEndAt',
            label: 'Offer End At',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'createdAt',
            label: 'Created at',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'updatedAt',
            label: 'Updated At',
            options: {
                filter: true,
                sort: true,
            },
        },
    ]

    //
    // ─── USEEFFECT TO FETCH DATA FROM THE BACKEND WITH AXIOS AND SETTING TO LOCAL STATE IN DATA
    //

    useEffect(() => {
        axios
            .get(`https://target-backend.herokuapp.com/`, { crossdomain: true })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }, [])

    //
    // ─── USEEFFECT TO ADD A NEW PRODUCT OBJECT FROM THE MODAL INTO THE TABLE DATA AT THE TOP
    //

    useEffect(() => {
        console.log(NewProductObject, ';;')
        if (Object.keys(NewProductObject).length !== 0) {
            setData([NewProductObject, ...data])
        }
    }, [NewProductObject])

    const options = {
        filterType: 'dropdown',
        responsive: 'scroll',
    }

    return (
        <>
            <MenuAppBar />

            <div className='container'>
                {/* Feature Description of the app with relevant links for code */}

                {/* <p className="desc-para">
          CRUD Assignment with Listing all products, Responsive Design, Sorting
          each feild by clicking on header, Filtering the feilds dynamically and
          reset, Search, Download CSV, Pagination and Rows per page setting,
          Multiple products select with batch delete and fetching data from mock
          backend
          <br />(
          <a
            href="https://github.com/kiranFullStack/target-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="pointer">
              👉🏼
            </span>
            Backend Code
          </a>
          ) (
          <a
            href="https://github.com/kiranFullStack/target-assignment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="pointer">
              👉🏼
            </span>
            Frontend Code
          </a>
          ) )
        </p> */}

                {/* Modal to add products */}
                <SimpleModal setNewProductObject={setNewProductObject} />

                {data.length === 0 ? (
                    <GridLoader
                        css={override}
                        size={80}
                        color={'#123abc'}
                        loading='true'
                    />
                ) : (
                    <MUIDataTable
                        title={'Product List'}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                )}
            </div>

            {/* Footer */}
            <span className='footer-info'>
                Made by Kiran -{' '}
                <a
                    href='https://kiranfullstack.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    kiranfullstack.com
                </a>
            </span>
        </>
    )
}

export default App
