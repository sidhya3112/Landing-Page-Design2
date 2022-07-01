import React from 'react';
import './Testimonials.css';
import arrow from '../../images/arrow.png'
import Card from './Card';
import person1 from '../../images/person1.png'
import person2 from '../../images/person2.png'
import person3 from '../../images/person3.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <ul className='test-obj1'>
            <li className='test-head'>Our Testimonials</li>
            <li><div className='line-break-2'></div></li>
        </ul>
        <ul className='test-obj2'>
            <li><img className='back-arrow arrows' src={arrow} alt="" /></li>
            <li>
                <Card
                left={person3}
                right={person2}
                img={person1}
                des= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil libero a assumenda ducimus dolores voluptate placeat in iure corporis facilis! Facere tempore accusamus quos quasi expedita corrupti, recusandae at provident.'
                name='Md. Danish Ansari'
                post='Learner, Govt. Employee @UPPCL'
                />
            </li>
            <li><img className='front-arrow arrows' src={arrow} alt="" /></li>
        </ul>
    </div>
  )
}

export default Testimonials