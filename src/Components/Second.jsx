import React from 'react'
import {Link} from "react-router-dom"
import SecondData from '../Data/SecondData'
import {BsArrowRightShort} from 'react-icons/bs'
function Second() {
  return (
    <section className="second text-center py-5 container">
      <h1 className="py-2">Thesus Bestsellers</h1>
      <div className="grid py-3">
            {SecondData.map(b=>(
                <div key={b.title} className="gbox text-start">
                    <img className="w-100" src={b.img} alt="" />
                    <Link to={`/`}><p className='pt-1'>{b.title} <BsArrowRightShort/></p></Link>
                </div>
            ))}
      </div>
      <Link className="link" to={`/bestseller/`}>Discover your perfect pair!</Link>
    </section>
  )
}

export default Second
