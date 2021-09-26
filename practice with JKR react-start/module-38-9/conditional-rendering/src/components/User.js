import React from 'react';

const User = (props) => {
    const familer = props.isfamiler;
    return (
        <div>
            <div>
                <h2>greetings</h2>
                {
                    familer ? <p>Welcome My friend</p> : <p>who the hell are u</p>
                }
            </div>
            <div>
                <h2>food</h2>
                {
                familer ? <p>i will buy food for u</p> 
                : <p>let's eat his his whose whose</p>
                }
            </div>
            <div>
                <h3>connection</h3>
                {
                    familer ? <p>let's join my facebook</p> : <p>i don't add stranger?</p>
                }
            </div>
        </div>
    );
};

export default User;