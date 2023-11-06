import React from 'react'
import {Link} from 'react-router-dom'
import FirstData from '../Data/FirstData'
import {BsArrowRightShort} from 'react-icons/bs'
function First() {
  return (
    <section className="first container">
        <h1 className="text-center">Socially and environmentally progressive outdoor footwear that helps you #BeOutside</h1>
        <div className="grid py-5">
            {FirstData.map(a=>(
                <Link to={`/all/`}>
                    <div key={a.img} className="ibox">
                        <img className="w-100" src={a.img} alt="" />
                    </div>
                    <p>{a.title} <BsArrowRightShort size={20}/></p>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default First
