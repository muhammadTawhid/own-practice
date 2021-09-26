import React, { useState } from 'react';

const UserInfo = (props) => {
    const {name, email, img, salary, username} = props.user;
    const imgStyle = {width:"200px"}
    const divStyle =  {
        width: "300px",
        margin: "10px", 
        border: "1px solid black",
    }
    const handleAddUser = props.handleAddUser;

    const [userName, setUserName] = useState("")
    const handleUserName = () => setUserName(username)
    
    return (
        <div >
            <div style={divStyle}>
                <img style={imgStyle} src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Username: <button onClick={handleUserName}>&gt;</button> {userName}</p>
                
                <p>Email: {email}</p>
                <p><small>salary: {salary}</small></p>
                <button onClick={() => handleAddUser(props.user)}>add user</button>
            </div>
        </div>
    );
};

export default UserInfo;;