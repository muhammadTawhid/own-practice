import React from 'react';

const Home = (props) => {
    const  {count, setCount} = props
    return (
        <div>
            <h1>this is home count {count}</h1>
            <button onClick={() => setCount(count+1)}>increase count</button>
        </div>
    );
};

export default Home;