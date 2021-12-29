import React from 'react';
import { useState } from 'react';
import Events from './Events';

const Home = () => {
    const [events, setEvents] = useState([]);

    fetch("http://localhost:5000/events")
    .then(res => res.json())
    .then(data => setEvents(data))

    return (
        <div className="row">
            {
                events.map(event => <Events event={event} key={event._id}/>)
            }
        </div>
    );
};

export default Home;