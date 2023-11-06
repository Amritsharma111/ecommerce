import React, { useState } from 'react'
import { NavLink,Link,Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Bestseller from '../Pages/Bestseller'
import logo from '../assets/logo.avif'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'
import {BsMinecartLoaded} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import {AiOutlineMenu} from 'react-icons/ai'
function Header() {
    const [nav, setNav] = useState(false);
    const removeActive = () => {
    setNav(false)
  }
  return (
    <header>
      <div className="top">
        <p className="text-center text-white py-2">Free shipping in NA. Easy returns. Pay in 4 installments.</p>
      </div>
      <nav className="container py-3">
        <div>
            <Link to={`/`}><img  src={logo} alt="" /></Link>
        </div>
        <div className="main">
            <ul className={ nav ? "show" : ""}>
                <li onClick={removeActive}><NavLink to={`/bestseller/`}>Bestsellers</NavLink></li>
                <li onClick={removeActive}><NavLink to={`/rain/`}>Rain Boots</NavLink></li>
                <li onClick={removeActive}><NavLink to={`/weekend/`}>Weekend Boots</NavLink></li>
                <li onClick={removeActive}><NavLink to={`/terrus/`}>Terrus Clogs</NavLink></li>
                <li onClick={removeActive}><NavLink to={`/all/`}>Shop All</NavLink></li>
                <li onClick={removeActive}><NavLink to={`/value/`}>Values</NavLink></li>
            </ul>
        </div> 
        <div>
            <ul>
                <li className="npl"><Link to={`/`}>NPR ₨ | Nepal <RiArrowDropDownLine/></Link></li>
                <li className='bb'><Link to={`/search`}> <AiOutlineSearch size={22}/></Link></li>
                <li className='p bb'><Link to={`/login`}> <GoPerson size={22}/></Link></li>
                <li className='bb'><Link to={`/cart`}> <BsMinecartLoaded size={22}/></Link></li>
                
            </ul>
        </div>
        <div className='menu' onClick= {() => {setNav(!nav)}}>
                {nav ? <RxCross2 size={30}/> : <AiOutlineMenu size={30}/> }
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bestseller/" element={<Bestseller/>}/>
      </Routes>
    </header>
  )
}

export default Header
