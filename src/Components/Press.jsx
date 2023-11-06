import React from 'react'
import PressData from '../Data/PressData'
function Press() {
  return (
    <section className="press container py-5 text-center">
      <h1>In the Press</h1>
      <div className="grid">
            {PressData.map(c=>(
                <div key={c.img}>
                    <img className="w-100" src={c.img} alt="" />
                </div>
            ))}
      </div>
    </section>
  )
}

export default Press
