import React from 'react'
import {workData} from './Data'
import Item from './Item'
const Works = () => {
  return (
    <div>
    <div className='work__container container grid'>
{workData.map((pro,index)=>{
    return(<Item item={pro} key={pro.id}/>)

})}
    </div>
    </div>
  )
}

export default Works