import React from 'react';
import './Features.css';
import bg1 from '../../images/Ellipse5-1.png';
import bg2 from '../../images/Ellipse5-2.png';
import bg3 from '../../images/Ellipse5-3.png';
import bg4 from '../../images/Ellipse5-4.png';
import bg5 from '../../images/Ellipse5-5.png';
import icon1 from '../../images/icon-1.png';
import icon2 from '../../images/icon-2.png';
import icon3 from '../../images/icon-3.png';
import icon4 from '../../images/icon-4.png';
import icon5 from '../../images/icon-5.png';

const Features = () => {
  return (
    <div>
        <ul className='features'>
            
                <ul className='features-list-1 features-list'>
                    <li className='features-head'>Start learning with us right now! </li>
                    <li className='features-des'>Choose from 100+ online video courses with new updates</li>
                    <button className='enroll-button-2 button-details'>Enroll Now</button>
                </ul>
            

                <ul className='features-list-2 features-list '>
                    
                        <ul className='features-list-2-1'>
                            
                                <ul className='feature-icon'>
                                    <li className='feature-text feature-text-1'>Live Exams</li>
                                    
                                        <div className='two-imgs'>
                                            <img className='bg-icon' src={bg1} alt="" />
                                            <img className='icon' src={icon1} alt="" />
                                        </div>
                                    
                                </ul>
                            

                            
                                <ul className='feature-icon'>
                                   <li className='feature-text feature-text-2'>Live Classes</li>
                                   
                                        <div className='two-imgs'>
                                            <img className='bg-icon' src={bg2} alt="" />
                                            <img className='icon' src={icon4} alt="" />
                                        </div>
                                   
                                </ul>                    
                            

                            
                                <ul className='feature-icon'>
                                    <li className='feature-text feature-text-3'>100 K+ Views</li>
                                    
                                        <div className='two-imgs'>
                                            <img className='bg-icon' src={bg3} alt="" />
                                            <img className='icon' src={icon5} alt="" />
                                        </div>
                                    
                                </ul>
                            
                        </ul>
                    

                    
                        <ul className='features-list-2-2'>
                            
                                <ul className='feature-icon'>
                                    <li className='feature-text feature-text-4'>1000+ Lessons</li>
                                    
                                        <div className='two-imgs'>
                                            <img className='bg-icon' src={bg4} alt="" />
                                            <img className='icon' src={icon2} alt="" />
                                        </div>
                                    
                                </ul>
                            

                            
                                <ul className='feature-icon'>
                                    <li className='feature-text feature-text-5'>1000+ Lessons</li>
                                    
                                        <div className='two-imgs'>
                                            <img className='bg-icon' src={bg5} alt="" />
                                            <img className='icon' src={icon3} alt="" />
                                        </div>
                                </ul>
                        </ul>
                </ul>
        </ul>
    </div>
  )
}

export default Features