import React from 'react';
import style from './selected.css'

const Selected = (props) => {

    const {name,price,image} = props.newPlayers;

    return (
        <div className="selected-players">
            <div >
                <img className="photos" src={image} alt="image" />
            </div>
            <div className="detail">
                <p><b>{name}</b></p>
                <p><b>Price : {price}</b></p>
            </div>
        </div>
    );
};

export default Selected;