import React, { useEffect, useState } from 'react';
import AddedPlayer from '../AddedPlayer/AddedPlayer';
import ShowPlayers from '../ShowPlayers/ShowPlayers';

const Player = () => {
    const [players, setPlayers] = useState([])
    const [addedPlayer, setAddedPlayer] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/69470ea4-7b44-47b3-9961-91c42e1351ba")
        .then(res => res.json())
        .then(data => setPlayers(data))
        .catch(error => console.log(error))
    }, [])

    
    const handleAddPlayer = Players =>{
        const newAddedPlayer = [...addedPlayer, Players];
        return setAddedPlayer(newAddedPlayer);
    }

    return (
        <div className="d-flex">
           <div className="row row-cols-md-3 container w-75">
                {
                    players.map(player => <ShowPlayers player = {player} handleAddPlayer={handleAddPlayer} key={player.Name}/>)
                }
           </div>
           <div>
               <h3>Added Players</h3>
               <AddedPlayer addedPlayer={addedPlayer}/>
           </div>
        </div>
    );
};

export default Player;