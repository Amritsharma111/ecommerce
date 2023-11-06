import React from 'react'
import {Link} from 'react-router-dom'
function Autumn() {
  return (
    <section className="container autumn text-center">
      <div className="div">
        <h1>Autumn 2023 Lookbook</h1>
        <p className="py-3">#BeOutside this season, through the sunny days and the cooler nights.</p>
        <Link to={`/lookbook/`}>Explore our lookbook!</Link>
      </div>
    </section>
  )
}

export default Autumn
