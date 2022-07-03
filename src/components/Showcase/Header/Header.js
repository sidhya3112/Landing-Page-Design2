import React from 'react';
import './Header.css';
import logo from '../../../images/healthicons_dhis2-logo-outline.png';

const Header = () => {
  return (
    <div className='header'>
        <ul className='logo header-component-list'>
            <li><img className='logo-img' src={logo} alt="" /></li>
            <li className='logo-text '>Scrumverse</li>
        </ul>

        <ul className='navbar-buttons header-component-list'>
            <li className='navlist'>
                <button className='nav-button header-button'>Home</button>
            </li>
            <li className='navlist'>
                <button className='nav-button header-button'>About</button>
            </li>
            <li className='navlist'>
                <button className='nav-button header-button'>Courses</button>
            </li>
            <li className='navlist'>
                <button className='nav-button header-button'>Blogs</button>
            </li>
        </ul>

        <ul className='login-signup-buttons header-component-list'>
            <li className='navlist'>
                <button className='login-button header-button'>Login</button>
            </li>
            <li className='navlist'>
                <button className='signup-button header-button'>Sign Up</button>
            </li>
        </ul>


    </div>
  )
}

export default Header