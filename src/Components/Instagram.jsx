import React from 'react'
import { Link } from 'react-router-dom'
import InstaData from '../Data/InstaData'
function Instagram() {
  return (
    <section className="insta py-5 container text-center">
      <h1>Join Us on Instagram</h1>
      <h1><Link to='https://www.instagram.com/thesus_outdoors/?hl=en&__coig_restricted=1' target='_blank'>@Thesus_Outdoors</Link></h1>
      <div className="grid py-2">
            {InstaData.map(a=>(
                <div key={a.img}>
                    <img className="w-100" src={a.img} alt="" />
                </div>
            ))}
      </div>
    </section>
  )
}

export default Instagram
