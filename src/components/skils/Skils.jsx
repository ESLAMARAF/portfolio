import React from 'react'
import Frontend from './Frontend'
import './skils.css'

const Skils = () => {
  return (
    <section className="skils section" id="skils">
        <h2 className="section__title">Skils</h2>
       <span className="section__subtitle">My technical level</span>

       <div className="skils__container container">
        <Frontend/>
       </div>
    </section>
  )
}

export default Skils