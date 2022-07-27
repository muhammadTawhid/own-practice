import React, { Component } from 'react'
import User from './User';

export default class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            users: [],
            cart: []
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => this.setState({users:data}))
    }

    handleAddToCart (user){
        const newCart = [...this.state.cart, user];
        this.setState({cart: newCart})
        console.log(user);
    }

    render() {
        return (
            <div>
                <h1>total users: {this.state.users.length}</h1>
                <h1>total users in cart: {this.state.cart.length}</h1>
                {
                    this.state.users.map(user => <User handleAddToCart={this.handleAddToCart} user={user} />)
                }
            </div>
        )
    }
}


