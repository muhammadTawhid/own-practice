import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const ShowPlayers = (props) => {
    const [isClicked, setIsClicked] = useState(false)

    const {Img, Name, Born, CurrentAge, PlayingRole, BattingStyle, Cost, } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div>
            <div className="" style = {{width:"300px", border: "5px solid lightgray", margin: "10px", padding:"10px"}}>
                <img src={Img} alt="" />
                <h4>Name: {Name}</h4>
                <p>Born: {Born}</p>
                <p>Current Age: {CurrentAge}</p>
                <p>Playing Role: {PlayingRole}</p>
                <p>Batting Style: {BattingStyle}</p>
                <p>Hire Cost: {Cost}</p>
                <button onClick={() => {handleAddPlayer(props.player); setIsClicked(true)}} className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} /> {isClicked ? "Already added" : " Add for league"}</button>
            </div>
        </div>
    );
};

export default ShowPlayers;