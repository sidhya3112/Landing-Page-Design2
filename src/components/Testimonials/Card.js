import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-pics'>
            <img className='person-left person' src={props.left} alt="" />
            <img className='card-img' src={props.img} alt="" />
            <img className='person-right person' src={props.right} alt="" />
        </div>
        
        <ul className='card-body'>
            <li className='card-des'>"{props.des}"</li>
            <li className='card-name'>{props.name}</li>
            <li className='card-post'>{props.post}</li>
        </ul>
    </div>
  )
}

export default Card