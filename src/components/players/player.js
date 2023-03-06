import React from 'react';
import style from './player.css'

const Players = (props) => {

    const player = props.player;

    const {name, username,country,price,image} = player;

    

    return (

        
        
        <div >
            
            <div className="players">
                <h3>{username}</h3>
                <div>
                    <img className='photo' src={image} alt="" />
                </div>
                <h4 className='full-name'>Full Name : {name}</h4>
                <h4 className='country'>Country : {country}</h4>
                <h4 className='price'>Price : $ {price}</h4>
                <button onClick={()=>props.handelClick(player)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Players;