import React from 'react';
import CourseBox from './CourseBox';
import './CourseInfo.css';
import courseImg from '../../images/course-img.png';
import arrow from '../../images/arrow.png'

const CourseInfo = () => {
  return (
    <div>
        <ul className='course-info'>
            <li className='c-head c-text'>A broad range of courses</li>
            <li className='c-des c-text'>Choose from 100+ online video courses with new additions published every month</li>
        </ul>
        <ul className='course-boxes'>
          <li>
            <CourseBox
            img={courseImg}
            title='Learn SCRUM: The Complete Beginner Course'
            author='Samay Jain, Ex-KPMG'
            rating='4.5'
            />
          </li>

          <li>
            <CourseBox
            img={courseImg}
            title='Learn SCRUM: The Complete Beginner Course'
            author='Samay Jain, Ex-KPMG'
            rating='4.5'
            />
          </li>

          <li>
            <CourseBox
            img={courseImg}
            title='Learn SCRUM: The Complete Beginner Course'
            author='Samay Jain, Ex-KPMG'
            rating='4.5'
            />
          </li>

          <li>
            <CourseBox
            img={courseImg}
            title='Learn SCRUM: The Complete Beginner Course'
            author='Samay Jain, Ex-KPMG'
            rating='4.5'
            />
          </li>

          <li>
            <img className='arrow' src={arrow} alt="" />
          </li>
        </ul>
    </div>
  )
}

export default CourseInfo