import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import data from '../fakeData/data.json'
import UserInfo from '../UserInfo/UserInfo';
import UsersCart from '../UsersCart/UsersCart';

const User = () => {
    const [users, setUsers] = useState(data);
    const [usersCart, setUserCart] = useState([]);
    // console.log(usersCart)

    // useEffect(()=> {
    //     fetch(data)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    const handleAddUser = (user) => {
        const newUsersCart = [...usersCart, user]; 
        return setUserCart(newUsersCart);
    }
    return (
        <div style={{display:"flex"}}>
            <div>
                {
                    users.map(user => <UserInfo user={user} key={user.id} handleAddUser={handleAddUser}/>)
                }
            </div>
            <div>
                <h1>added user{usersCart.length}</h1>
                {/* {
                    usersCart.map(user => <UsersCart user={user} />)
                } */}
                <UsersCart user={usersCart} />
            </div>
        </div>
    );
};

export default User;