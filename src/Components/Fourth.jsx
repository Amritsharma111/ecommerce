import React from 'react'
import img from '../assets/frth.jpg'
function Fourth() {
  return (
    <section className='frth container py-5'>
      <div className="d-flex justiy-content-between align-items-center gap-5">
        <div className="col-lg-6 text-center">
          <h1>*****</h1>
            <h4>They have a very nice padding in the sole which makes it comfortable to wear for long periods of time and these shoes definitely fit very true to size."</h4>
            <p className='pt-3'>CLAIRE</p>
        </div>
        <div className="">
            <img className='w-100' src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Fourth
