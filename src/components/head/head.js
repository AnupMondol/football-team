import React from 'react';
import style from './head.css';
import logo from '../../2.jpg';

const Head = () => {
    return (
        <div>
            
            <div className="header">
                <img className='logo' src={logo} alt="" />
                <h1>Create Your Own Football Team</h1>
            </div>
        </div>
    );
};

export default Head;