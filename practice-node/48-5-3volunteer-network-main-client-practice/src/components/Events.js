import React from 'react';

const Events = (props) => {
    const {name, imgUrl, _id} = props.event;
    const handleDelete = id =>{
        fetch("http://localhost:5000/delete/" + id,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div  className='col-md-3'>
            <img style={{width:"300px"}} src={imgUrl} alt="" />
            <h3>{name}</h3><button onClickCapture={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default Events;