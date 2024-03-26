import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header className="navbar">
            <h1>Content</h1>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Display</li>
                <li>Content</li>
            </ul>
            <button className='btn'>
                Login/SignUp
            </button>
        </header>
    );
};

export default Header;
