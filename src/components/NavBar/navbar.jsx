import React from 'react'
import Header from '../../assets/Header-w.jpg'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar' style={{ backgroundImage: `url(${Header})` }}>
            <div className="gradient-overlay"></div>
            <ul className="nav-items">
                <li className='nav-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/tvshows'>TV Shows</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/viewingorder'>Viewing Order</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/upcoming'>Upcoming</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/characters'>Characters</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/theories'>Fan Theories</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/ask'>Ask</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
