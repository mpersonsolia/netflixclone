import React from 'react';
import './header.css';

export default ({black}) => {
    return (
        <header className = {black ? 'black' : ''}>
            <div className = "header--logo">
                <a href = "/">
                    <img src = "logo.png" alt = "Netflix"/>
                </a>
            </div>

            <div className = "header--user">
                <img src = "user.png" alt = "User"/>
            </div>
        </header>
    );
}