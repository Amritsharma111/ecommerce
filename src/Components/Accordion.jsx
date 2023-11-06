import React from 'react'
import {PiRulerThin} from 'react-icons/pi'
import {CiDeliveryTruck} from 'react-icons/ci'
import {BsArrow90DegLeft} from 'react-icons/bs'
import {AiOutlineTag} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Accordion() {
    return (
        <section className="accordion text-center py-5 ">
            <h1>Try Them Out!</h1>
            <p>Easy returns as many times as you need to find the right size. <br /> Just contact our team for support!</p>
            <div className="accordion py-4 text-start" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <PiRulerThin size={20}/>Find Your Size
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Check out our size guide to find your perfect match!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <CiDeliveryTruck size={20}/>Free Shipping
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Free shipping over $100 in Canada and the US. Check out ourShipping Information page for more details.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <BsArrow90DegLeft size={20}/>Easy Returns
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Easy returns as many times as you need to find the right size. Just contact our team for support!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           <AiOutlineTag size={20}/> Pay in 4
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Buy now, pay later! Pay in 4 easy instalments.
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/all/`}>Shop All</Link>

        </section>
    )
}

export default Accordion
