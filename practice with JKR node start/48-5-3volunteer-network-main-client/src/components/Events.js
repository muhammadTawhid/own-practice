import React from 'react';

const Events = (props) => {
    const {_id, name, imgUrl} = props.event
    
    const handleDelete = id => {
        fetch("https://calm-island-26626.herokuapp.com/delete/" + id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
   

    return (
        <div className='col-md-3'>
            <img style={{height:"300px"}} src={imgUrl} alt="" />
            <h3>{name}</h3> <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default Events;