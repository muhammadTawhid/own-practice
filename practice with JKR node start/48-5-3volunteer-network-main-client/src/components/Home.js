import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Events from './Events';
import { useState } from 'react';

const Home = () => {

    const [events, setEvents] = useState([]);

    // const events = [
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    //     {
    //         name: "Child Support",
    //         pic: "animalShelter.png"
    //     },
    // ]

    useEffect(() => {
        fetch("https://calm-island-26626.herokuapp.com/events")
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Navbar/>
            <div className='row'>
                {
                    events.map(event => <Events event={event} key={event._id}/>)
                }
            </div>
        </div>
    );
};

export default Home;