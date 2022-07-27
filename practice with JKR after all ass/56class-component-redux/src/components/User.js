import React, { Component } from 'react';

class User extends Component {
    render() {
        const {name} = this.props.user
        return (
            <div style={{border:"1px solid purple", margin:"10px"}}>
                <h4>this is {name}</h4>
                <button onClick={() => this.props.handleAddToCart(this.props.user)}>Add me</button>
            </div>
        );
    }
}

export default User;