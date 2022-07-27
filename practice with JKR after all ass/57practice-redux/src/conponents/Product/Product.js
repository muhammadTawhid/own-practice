import React from 'react';

const Product = (props) => {
    const {addToCart} = props;
    const {name, id } = props.pd
    return (
        <div style={{border:"1px solid red"}}>
            <h5>{name}</h5>
            <button onClick={() => addToCart(id, name)}>Add to cart</button>
        </div>
    );
};

export default Product;