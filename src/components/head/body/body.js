import React, { useEffect, useState } from 'react';
import Players from '../../players/player';
import Selected from '../../selected-players/selected';
import style from './body.css';
import logo1 from'../../../1.avif';
import logo2 from '../../../3.jpg';
import allPlayers from '../../../fake-api/api.json';

const Body = () => {

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        const players = allPlayers
        setPlayers(players);
    })

    const [newPlayers, setNewPlayers] = useState([]);

    const handelClick = (footballers)=>{
        const selectedPlayers = [...newPlayers,footballers]
        setNewPlayers(selectedPlayers);
    }

    let totalPrice = 0;
    
    for (let i = 0; i < newPlayers.length; i++) {
        const player = newPlayers[i];
        totalPrice = totalPrice + player.price;
        
    }


    return (
        <div>
            <div className='Players-body'>


                <div className="random-players">
                    <div className="top-part">
                        <img className='logo' src={logo2} alt="" />
                        <h2>Select Your Players</h2>
                    </div>  
                    
                    <div className="all-player">
                    {
                        players.map(player => <Players handelClick = {handelClick} player={player}></Players>)
                    }
                    </div>
                    
                    
                      
                </div>

                

                <div className="selected-player">
                    <div className='top-part'>
                        <img src={logo1} alt="" />
                        <h2>All Selected Players</h2>
                    </div>

                    
                    <div className="top-part2">
                        <h3><b className='length'>{newPlayers.length}</b> Player Selected</h3>
                        <h3>Total Price : <b className='price'>$ {totalPrice}</b> </h3>
                    </div>
                        
                    <div className="new-players-part">
                        {
                            newPlayers.map(player => <Selected newPlayers = {player}></Selected>)
                        }
                    </div>
                    
                    
                </div>

            </div>
        </div>
       
    );
};

export default Body;