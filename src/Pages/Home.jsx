import React from 'react'
import {Link} from 'react-router-dom'
import First from '../Components/First'
import Autumn from '../Components/Autumn'
import Second from '../Components/Second'
import Third from '../Components/Third'
import Accordion from '../Components/Accordion'
import Fourth from '../Components/Fourth'
import Press from '../Components/Press'
import Instagram from '../Components/Instagram'
function Home() {
  return (
    <>
        <div section className="home text-center text-white">
        <h1>Restocked!</h1>
            <p className="py-2">Our bestselling Weekend Boots are back, just in time for fall!</p>
            <Link>SHOP THE WEEKEND COLLECTION</Link>
        </div>
        <First/>
        <Autumn/>
        <Second/>
        <Third/>
        <Accordion/>
        <Fourth/>
        <Press/>
        <Instagram/>
      
    </>
  )
}

export default Home
