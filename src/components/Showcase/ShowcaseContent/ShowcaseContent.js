import React from 'react';
import './ShowcaseContent.css';
import img1 from '../../../images/Ellipse-1.png';
import img2 from '../../../images/Ellipse-2.png';
import img3 from '../../../images/Ellipse-3.png';
import img4 from '../../../images/Ellipse-4.png';
import CountDownBox from './CountDownBox';

const ShowcaseContent = () => {
  return (
    <div>
        <ul className='showcase-content'>

            <li>
                <ul className='list-1'>
                    <li>
                        <ul className='list-1-1 list-1-items'>
                            <li className='certification'>
                                <h1 className='certification-text'>#Most trusted certification by the industry</h1>
                            </li>
                            <li className='content-heading'>Unleash Your SCRUM Skills, Grab More Attention To Résumé</li>
                            <li><button className='enroll-button button-details'>Enroll Now</button></li>
                        </ul>
                    </li>
                    <li>
                        <ul className='list-1-2 list-1-items'>
                            <li className='offer'>10% OFF on all courses* | Offer Valid For</li>
                            <li><div className='line-break'></div></li>
                            <li>
                                <ul className='count-down'>
                                    <li>
                                        <CountDownBox
                                        time='02'
                                        unit='Hrs'
                                        />
                                    </li>
                                    <li>
                                        <CountDownBox
                                        time='58'
                                        unit='Mins'
                                        />
                                    </li>
                                    <li>
                                        <CountDownBox
                                        time='42'
                                        unit='Secs'
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>



            <li>
                <ul className='list-2'>
                    <li>
                        <ul className='small-imgs'>
                            <li>
                                <img className='img-4' src={img4} alt="" />
                            </li>
                            <li>
                                <img className='img-3' src={img3} alt="" />
                            </li>
                            <li>
                                <img className='img-2' src={img2} alt="" />
                            </li>
                        </ul>
                    </li>

                    <li>
                        <img className='img-1' src={img1} alt="" />
                    </li>
                </ul>
            </li>

        </ul>
    </div>
  )
}

export default ShowcaseContent