import React from 'react'
import './Email.css'

const Email = () => {
  return (
    <div className='email-block'>
        <ul className='email-block-content-wrapper'>
                <ul className='email-block-content'>
                    <li className='email-us email-text'>Email Us</li>
                    <li className='connect-with-us email-text'>Connect with us in case of queries, complaints or feedbacks...</li>
                </ul>
            
                <button className='contact-us-button'>
                    Contact Us
                </button>
        </ul>
    </div>
  )
}

export default Email