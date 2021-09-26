import React from 'react';
import { Link } from 'react-router-dom';

const  Friends = (props) => {
    const {name, email, id} = props.friend

    const divStyle ={
        border: "3px solid goldenrod",
        margin: "20px"
    }
    return (
        <div style={divStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>id: <Link to={`/friends/${id}`}>{id}</Link> show details</p>
        </div>
    );
};

export default Friends;