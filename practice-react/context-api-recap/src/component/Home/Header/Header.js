import React from 'react';

const Header = (props) => {
    const {count, setCount} = props;
    
    const handleIncrease = () => {
        return setCount(count + 1);
    }

    return (
        <div>
            <h1>this is header</h1>
            <button onClick={() => handleIncrease()}>increase count</button>
        </div>
    );
};

export default Header;