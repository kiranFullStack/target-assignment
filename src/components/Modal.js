import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"
import "../App.scss"

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function SimpleModal({ setNewProductObject }) {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const [productName, setProductName] = useState(null)
  const [productDescription, setProductDescription] = useState(null)
  const [isActive, setIsActive] = useState(null)
  const [price, setPrice] = useState(0)
  const [offerPrice, setOfferPrice] = useState(0)
  const [offerStartAt, setOfferStartAt] = useState(null)
  const [offerEndAt, setOfferEndAt] = useState(null)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = e => {
    setNewProductObject({
      productName,
      productDescription,
      isActive,
      price: parseInt(price),
      offerPrice: parseInt(offerPrice),
      offerStartAt,
      offerEndAt,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    })
    handleClose()

    e.preventDefault()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="simple-modal-title">Add your products</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <label className="column">Product Name</label>
          <input
            className="column"
            required
            type="text"
            onChange={e => {
              setProductName(e.target.value)
            }}
          />
        </div>

        <div className="row">
          <label className="column">Product Description</label>
          <input
            className="column"
            required
            type="text"
            onChange={e => {
              setProductDescription(e.target.value)
            }}
          />
        </div>

        <div className="row">
          <label className="column">Is Active?</label>
          <input
            className="column checkboxCustom"
            required
            type="checkbox"
            onChange={e => {
              setIsActive(!isActive)
            }}
          />
        </div>

        <div className="row">
          <label className="column">Price</label>
          <input
            className="column"
            required
            type="number"
            min="0"
            onChange={e => {
              setPrice(e.target.value)
            }}
          />
        </div>

        <div className="row">
          <label className="column">Offer Price</label>
          <input
            className="column"
            required
            type="number"
            min="0"
            onChange={e => {
              setOfferPrice(e.target.value)
            }}
          />
        </div>

        <div className="row">
          <label className="column">Offer Start At</label>
          <input
            className="column"
            required
            type="datetime-local"
            onChange={e => {
              setOfferStartAt(e.target.value)
            }}
          />
        </div>

        <div className="row">
          <label className="column">Offer End At</label>
          <input
            className="column"
            required
            type="datetime-local"
            onChange={e => {
              setOfferEndAt(e.target.value)
            }}
          />
        </div>
        <div className="submit-cnt">
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )

  return (
    <div>
      <div className="btn-container">
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          + Add Product
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
