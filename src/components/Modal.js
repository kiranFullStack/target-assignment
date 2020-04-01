import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"

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
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)
  const [productName, setProductName] = React.useState(null)
  const [productDescription, setProductDescription] = React.useState(null)
  const [isActive, setIsActive] = React.useState(null)
  const [price, setPrice] = React.useState(0)
  const [offerPrice, setOfferPrice] = React.useState(0)
  const [offerStartAt, setOfferStartAt] = React.useState(null)
  const [offerEndAt, setOfferEndAt] = React.useState(null)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  let time = new Date()

  const handleSubmit = e => {
    setNewProductObject({
      productName,
      productDescription,
      isActive,
      price: parseInt(price),
      offerPrice: parseInt(offerPrice),
      offerStartAt,
      offerEndAt,
      createdAt: time.getTime().toString(),
      updatedAt: time.getTime().toString()
    })

    e.preventDefault()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add your products</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            onChange={e => {
              setProductName(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Product Description</label>
          <input
            type="text"
            onChange={e => {
              setProductDescription(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Is Active?</label>
          <input
            type="checkbox"
            onChange={e => {
              setIsActive(!isActive)
            }}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            min="0"
            onChange={e => {
              setPrice(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Offer Price</label>
          <input
            type="number"
            min="0"
            onChange={e => {
              setOfferPrice(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Offer Start At</label>
          <input
            type="datetime-local"
            onChange={e => {
              setOfferStartAt(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Offer End At</label>
          <input
            type="datetime-local"
            onChange={e => {
              setOfferEndAt(e.target.value)
            }}
          />
        </div>

        <input type="submit" value="Add Product" />
      </form>
    </div>
  )

  return (
    <div>
      <Button className="btn" variant="contained" onClick={handleOpen}>
        + Add Product
      </Button>

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
