import React from 'react'
import fl from '../assets/footerlogo.jpg'
import { Link } from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import {PiTiktokLogoLight} from 'react-icons/pi'
function Footer() {
  return (
    <footer>
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-3">
            <img width="98" src={fl} alt="" />
            <h5 className='py-4'>Socially and environmentally progressive outdoor footwear</h5>
            <ul className="ul p-0">
              <li><Link><AiOutlineFacebook/></Link></li>
              <li><Link><AiOutlineInstagram/></Link></li>
              <li><Link><PiTiktokLogoLight/></Link></li>
              <li><Link><BsPinterest/></Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Our Shop</h5>
            <ul className='p-0'>
              <li><Link>All Products</Link></li>
              <li><Link>The Weekend Boot</Link></li>
              <li><Link>The Anyday Rain Boot</Link></li>
              <li><Link>The Winter Weekend Boot Z</Link></li>
              <li><Link>The Terrus Clog</Link></li>
              <li><Link>Accessories</Link></li>
              <li><Link>Thesus Gift Card</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
          <h5>Help</h5>
            <ul className='p-0'>
              <li><Link>Size guide</Link></li>
              <li><Link>Shipping Information</Link></li>
              <li><Link>Refund Policy</Link></li>
              <li><Link>Wear and Care FAQ</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
          <h5>About Us</h5>
            <ul className='p-0'>
              <li><Link>Values</Link></li>
              <li><Link>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
