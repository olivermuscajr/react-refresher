import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <div className="navbar-logo">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favorites" className='nav-link'>Favorites</Link>
            </div>

        </div>
    )
}
