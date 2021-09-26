import '../../App.css'
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const FriendsDetails = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const {name, email, phone, website} = friend;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div className="App">
            <h3>this is friends details of {friendId}</h3>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Phone: {phone}</p>

        </div>
    );
};

export default FriendsDetails;