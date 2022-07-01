import React from 'react'
import { Rating } from 'react-simple-star-rating';
import bookmark from '../../images/bookmark.png';
import './CourseBox.css'

const CourseBox = (props) => {
    
  return (
    <div>
        <ul className='course-box'>
            <li><img className='course-img' src={props.img} alt="" /></li>
            <li>
                <ul className='course-title-bookmark'>
                    <li className='course-title'>{props.title}</li>
                    <li><img className='course-bookmark' src={bookmark} alt="" /></li>
                </ul>
            </li>
            <li className='course-author'>{props.author}</li>
            <li>
                <ul className='course-star-rating'>
                    <li className='rating-number'>{props.rating}</li>

                    <li> <Rating  initialValue={props.rating}
                     fillColor= '#5F72BE' 
                     emptyColor='white'
                     size={20}
                     readonly={true}
                     /> 
                    </li>
                </ul>
            </li>
            <li style={{paddingLeft:'27px', paddingTop:'12px'}}>
                <button className='enroll-button-2 button-details'>
                    Enroll Now
                </button>
            </li>
        </ul>
    </div>
  )
}

export default CourseBox