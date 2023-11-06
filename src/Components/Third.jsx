import React from 'react'
import {Link} from 'react-router-dom'
function Third() {
  return (
    <section className="third container text-center text-white">
      <div className="div">
        <h1>Thesus outdoor footwear is thoughtfully designed from natural and recycled materials</h1>
        <p className="py-3">Each pair diverts 1-2 kg of waste from our waterways and landfill, reduces 20kg of CO2 from the atmosphere, and conserves 10L of water when compared to your traditional leather boot.</p>
        <Link to={`/value/`}>Learn more about our values</Link>
      </div>
    </section>
  )
}

export default Third
