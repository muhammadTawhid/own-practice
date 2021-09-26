import React, { useEffect,useState } from 'react';
import Friends from '../Friends/Friends';


const Home = () => {
    const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setFriends(data))
  }, []);
    return (
        <div>
            <h3>{friends.length}</h3>
      {
        friends.map(friend => <Friends friend={friend} />)
      }
        </div>
    );
};

export default Home;