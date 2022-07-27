import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
console.log("🚀 ~ file: Shop.js ~ line 7 ~ Shop ~ props", props)
    const {products, addToCart} = props;

    return (
        <div>
            <h1>this si shop</h1>
            {
                products.map(pd => <Product pd={pd} key={pd.id} addToCart={addToCart} />)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart, 
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);