import React from 'react';
import './CountDownBox.css'

const CountDownBox = (props) => {
  return (
    <div>
        <ul className='countdown-box'>
            <li className='time'>{props.time}</li>
            <li className='unit'>{props.unit}.</li>
        </ul>
    </div>
  )
}

export default CountDownBox