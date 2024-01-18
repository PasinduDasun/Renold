import React from 'react'
import './serviceCard.css'

function ServiceCard(props) {
  return (
    <div>
      <img src={props.imageid} alt={props.alt} className='cardImage'/>
      <h4 className='cardTitle'>{props.cardtitle}</h4>
      <button className='cardButton'>More</button>
    </div>
  )
}

export default ServiceCard
