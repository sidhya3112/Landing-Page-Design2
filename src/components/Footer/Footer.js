import React from 'react';
import './Footer.css';
import call from '../../images/call.png';
import email from '../../images/email.png';
import whatsapp from '../../images/whatsapp.png';
import youtube from '../../images/youtube.png';
import facebook from '../../images/facebook.png';
import figma from '../../images/figma.png';
import dribbble from '../../images/dribbble.png';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-obj1'>
            <li>
                <ul className='footer-obj1-left'>
                    <li className='footer-logo'>Logo</li>
                    <li className='footer-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quam saepe, error recusandae fuga autem eos dignissimos quaerat vero ex?</li>
                    <li>
                        <ul className='footer-contact-info'>
                            <li className='contact-details'>
                                <div className='footer-icon-bg'>
                                  <img className='footer-icon' src={call} alt="" />
                                </div>
                                <ul className='contact-info'>
                                    <li className='contact-info-head'>Have a question?</li>
                                    <li className='contact-info-des'>310-437-2766</li>
                                </ul>
                            </li>

                            <li className='contact-details'>
                                <div className='footer-icon-bg'>
                                  <img className='footer-icon' src={email} alt="" />
                                </div>
                                <ul className='contact-info'>
                                    <li className='contact-info-head'>Contact us at</li>
                                    <li className='contact-info-des'>unreal@outlook.com</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <div className='footer-line-break vertical'></div>
            </li>
            <li>
                <ul className='footer-obj1-right'>
                    <li className='newsletter'>Newsletter</li>
                    <li className='newsletter-des'>Be the first one to know about discounts, offers and events weekly in our mailbox. Unsubscribe whenever you like with one click.</li>
                    <li>
                        <form className='footer-textfield'>
                                <img className='textfield-img' src={email} alt="" />
                                <input className='footer-textfield-input' type="text" placeholder="Enter your Email"/>
                                <button className='textfield-send-btn'>Submit</button>
                        </form>
                    </li>
                </ul>
            </li>
        </ul>
        <div className='footer-line-break horizontal'></div>


        <ul className='footer-obj2'>
            <li>
                <ul className='footer-obj2-list-1'>
                    <li><button className="footer-obj2-buttons">About Us</button></li>
                    <li><button className="footer-obj2-buttons">Jobs</button></li>
                    <li><button className="footer-obj2-buttons">Blog</button></li>
                    <li><button className="footer-obj2-buttons">Press</button></li>
                    <li><button className="footer-obj2-buttons">FAQ</button></li>
                    <li><button className="footer-obj2-buttons">Careers</button></li>
                    <li><button className="footer-obj2-buttons">Contact</button></li>
                    <li><button className="footer-obj2-buttons">Privacy Policy</button></li>
                    <li><button className="footer-obj2-buttons">Sitemap</button></li>
                    <li><button className="footer-obj2-buttons">Terms of Use</button></li>
                </ul>
            </li>

            <li>
                <ul className='footer-obj2-list-2'>
                    <li>
                        <ul className="social-media-button-list">
                            <li><button className='footer-icon-bg'><img className='footer-icon' src={facebook} alt="" /></button></li>
                            <li><button className='footer-icon-bg'><img className='footer-icon' src={whatsapp} alt="" /></button></li>
                            <li><button className='footer-icon-bg'><img className='footer-icon' src={dribbble} alt="" /></button></li>
                            <li><button className='footer-icon-bg'><img className='footer-icon' src={figma} alt="" /></button></li>
                            <li><button className='footer-icon-bg'><img className='footer-icon' src={youtube} alt="" /></button></li>
                        </ul>
                    </li>

                    <li className='copyright'>
                    © 2000-2021, All Rights Reserved
                    </li>

                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Footer