import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ props", props)
    const {cart, removeFromCart} = props
    return (
        <div>
            <h1>this is cart</h1>
            {cart.map(pd => <li> {pd.name} <button onClick={() =>removeFromCart(pd.cartId)}>X</button></li>)}
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);