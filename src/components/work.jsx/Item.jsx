import React from 'react'
import {scY} from "./Data"
import { useState } from "react";
const Item = ({item}) => {
    
        
            
    const [scroll, setScroll] = useState(false);
  return (
    <div className='work__card' key={item.id} >
        
            <div className="work__img" >
               <a href={item.Doman}><img src={item.image} alt=""  style={{
                transform: scroll ? `translateY(${scY.scrolY})` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
             /></a> 
        </div>

        <div className="work__title">
            <h3>{item.title}</h3>
        <p>{item.paragraf}</p>
        <div className="stack">
        <p>{item.tools1}</p>
        <p>{item.tools2}</p>
        </div>
        <div class="links">
            <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code <i class="fa-brands fa-github"></i></a>
            <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">Live Demo<i class="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
            </div>
        
        </div>
        
    </div>
  )
}

export default Item