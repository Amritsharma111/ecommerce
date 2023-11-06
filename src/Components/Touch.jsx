import React from 'react'

function Touch() {
  return (
    <section className="touch">
      <div className="container text-center">
            <h1>Let's stay in touch!</h1>
            <p className="py-2">Subscribe to our newsletter. Get $10 off your first purchase, <br /> exclusive offers and outdoor tips, trips and education.</p>
            <form action="">
                <input type="text" placeholder='Your email....' />
                <input type="submit"  value="Get 10% saving"/>
            </form>
      </div>
    </section>
  )
}

export default Touch
