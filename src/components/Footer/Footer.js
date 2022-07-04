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
                <ul className='footer-obj1-left'>
                    <li className='footer-logo'>Logo</li>
                    <li className='footer-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quam saepe, error recusandae fuga autem eos dignissimos quaerat vero ex?</li>
                    
                        <ul className='footer-contact-info'>
                            <li className='contact-details'>
                                <div className='footer-icon-bg'>
                                  <img className='footer-icon' src={call} alt="" />
                                </div>
                                <ul className='contact-info'>
                                    <p className='contact-info-head'>Have a question?</p>
                                    <p className='contact-info-des'>310-437-2766</p>
                                </ul>
                            </li>

                            <li className='contact-details'>
                                <div className='footer-icon-bg'>
                                  <img className='footer-icon' src={email} alt="" />
                                </div>
                                <ul className='contact-info'>
                                    <p className='contact-info-head'>Contact us at</p>
                                    <p className='contact-info-des'>unreal@outlook.com</p>
                                </ul>
                            </li>
                        </ul>
                </ul>
            
            <div className='footer-line-break vertical'></div>
            
                <ul className='footer-obj1-right'>
                    <li className='newsletter'>Newsletter</li>
                    <li className='newsletter-des'>Be the first one to know about discounts, offers and events weekly in our mailbox. Unsubscribe whenever you like with one click.</li>
                    
                        <form className='footer-textfield'>
                                <img className='textfield-img' src={email} alt="" />
                                <input className='footer-textfield-input' type="text" placeholder="Enter your Email"/>
                                <button className='textfield-send-btn'>Submit</button>
                        </form>
                    
                </ul>
        </ul>

        <div className='footer-line-break horizontal'></div>

        <ul className='footer-obj2'>
                <ul className='footer-obj2-list-1'>
                    <button className="footer-obj2-buttons">About Us</button>
                    <button className="footer-obj2-buttons">Jobs</button>
                    <button className="footer-obj2-buttons">Blog</button>
                    <button className="footer-obj2-buttons">Press</button>
                    <button className="footer-obj2-buttons">FAQ</button>
                    <button className="footer-obj2-buttons">Careers</button>
                    <button className="footer-obj2-buttons">Contact</button>
                    <button className="footer-obj2-buttons">Privacy Policy</button>
                    <button className="footer-obj2-buttons">Sitemap</button>
                    <button className="footer-obj2-buttons">Terms of Use</button>
                </ul>

                <ul className='footer-obj2-list-2'>
                        <ul className="social-media-button-list">
                            <button className='footer-icon-bg'><img className='footer-icon' src={facebook} alt="" /></button>
                            <button className='footer-icon-bg'><img className='footer-icon' src={whatsapp} alt="" /></button>
                            <button className='footer-icon-bg'><img className='footer-icon' src={dribbble} alt="" /></button>
                            <button className='footer-icon-bg'><img className='footer-icon' src={figma} alt="" /></button>
                            <button className='footer-icon-bg'><img className='footer-icon' src={youtube} alt="" /></button>
                        </ul>

                    <li className='copyright'>
                    © 2000-2021, All Rights Reserved
                    </li>

                </ul>
        </ul>
    </div>
  )
}

export default Footer