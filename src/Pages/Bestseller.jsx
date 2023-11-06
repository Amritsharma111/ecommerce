import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import BestsellerData from '../Data/BestsellerData'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
function Bestseller() {
  return (
    <section className="bestseller">
      <div className="btop text-center text-white">
          <h1>Bestsellers</h1>
          <p className="py-3">A collection of Your Favourite Footwear</p>
      </div>
      <div className="container">
       <div className="d-lg-flex justify-content-between">
            <span className="d-lg-flex d-none align-items-center">Filter:<p className="pt-3 px-3">Size</p> <RiArrowDropDownLine/></span>
            <span className="d-lg-flex  d-none align-items-center">Sort By: 
            <form id="form1">
              <select className="mx-lg-3">
                <option value=''>New</option>
                <option value=''>Price:Low to High</option>
                <option value=''>Price: High to Low</option>
                <option value=''>Alphabetically A-Z</option>
                <option value=''>Alphabetically Z-A</option>
                <option value='bestseller' selected>BestSeller</option>
              </select>
            </form> 
    <p className="pt-3">8 Products</p></span>
       </div>
       <div className="grid py-3">
                {BestsellerData.map(a=>(
                  
                    <div key={a.id}>
                      <Link to={`/weekend/`}>
                        <div className="ibox">
                          <img className='w-100' src={a.img} alt="" />
                        </div>
                        <p className='name m-0 pt-2'>{a.title}</p>
                        <p className='icon m-0 py-2'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span>(10)</span></p>
                        <p className='m-0 price py-1'>{a.amount}</p>
                        </Link>
                        <form id="form1">
                            <select className="w-100 p-2">
                              <option value=''>42</option>
                              <option value=''>41</option>
                              <option value=''>40</option>
                              <option value=''>39</option>
                              <option value=''>38</option>
                              <option value=''>37</option>
                              <option value='36' selected>36</option>
                            </select>
                          </form>
                        <button className='w-100 my-3 p-2'>Add To Cart</button>
                    </div>
                  
                ))}
            </div>
      </div>
    </section>
  )
}

export default Bestseller
