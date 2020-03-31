import React from "react"
import "./App.scss"
import Table from "./components/Table"
import SimpleModal from "./components/Modal"

function App() {
  return (
    <div className="container">
      <h1>Target CRUD assignment</h1>
      <SimpleModal />
      <Table />
    </div>
  )
}

export default App
