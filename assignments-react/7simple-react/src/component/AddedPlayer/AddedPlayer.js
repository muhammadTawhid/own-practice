import React from 'react';

const AddedPlayer = (props) => {
    const addedPlayers = props.addedPlayer
    const total = addedPlayers.reduce((total, player) => total + player.Cost, 0);
    return (
        <div>
            <h5>Total salaries of added Player: {total}</h5>
            {
                addedPlayers.map(player =>
                    <div className="border mt-3">
                            <img src={player.Img} alt="" />
                            <p>Name: {player.Name}</p>
                            <p><small>Salary: {player.Cost}</small></p>
                    </div>
                )
            }
        </div>
    );
};

export default AddedPlayer;