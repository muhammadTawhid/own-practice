import React, { useRef } from 'react';

const ExploreRef = () => {
    const inputElement = useRef(null)

    const handleFocus = () =>{
        inputElement.current.focus()
    }
    return (
        <div>
            <input ref={inputElement} type="text" name="" id=" " />
            <button onClick={handleFocus}>Focus input</button>
        </div>
    );
};

export default ExploreRef;