import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Header = (props) => {
    const { setCount} = props;
    const count = useContext(CategoryContext);
    return (
        <div style={{border:"1px solid purple"}}>
            <h1>this is header count implemented by context {count}</h1>
            <button onClick={() => setCount("laptop")}>laptop</button>
            <button onClick={() => setCount("mobile")}>mobile</button>
            <button onClick={() => setCount("camera")}>camera</button>
            <Categories/>
        </div>
    );
};

export default Header;