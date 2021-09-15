import React from 'react';

const UserInfo = (props) => {
    const {name, email, img, salary} = props.user;
    const imgStyle = {width:"200px"}
    const divStyle =  {
        width: "300px",
        margin: "10px", 
        border: "1px solid black",
    }

    const handleAddUser = props.handleAddUser;
    
    return (
        <div >
            <div style={divStyle}>
                <img style={imgStyle} src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p><small>salary: {salary}</small></p>
                <button onClick={() => handleAddUser(props.user)}>add user</button>
            </div>
        </div>
    );
};

export default UserInfo;