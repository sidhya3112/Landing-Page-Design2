import React from 'react'
import { Rating } from 'react-simple-star-rating';
import bookmark from '../../images/bookmark.png';
import './CourseBox.css'

const CourseBox = (props) => {
    var width = window.innerWidth;
    var screenRatio = width/1440;

    window.addEventListener('resize', function () {
        if (window.innerWidth !== width) {
            window.location.reload(true);
        }
    });
    
    console.log(screenRatio);
    var size = 20*screenRatio;
    console.log(size);

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
                <p className='rating'>
                   {props.rating}

                     <Rating 
                     initialValue={props.rating}
                     fillColor= '#5F72BE' 
                     emptyColor='white'
                     size= {size}
                     readonly={true}
                     /> 
                    
                </p>
            </li>
            <li className='enroll-button-in-card '>
                <button className='enroll-button-2 button-details'>
                    Enroll Now
                </button>
            </li>
        </ul>
    </div>
  )
}

export default CourseBox