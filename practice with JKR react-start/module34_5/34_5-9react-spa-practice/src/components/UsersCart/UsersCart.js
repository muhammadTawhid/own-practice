import React from 'react';

const UsersCart = (props) => {
    const usersCart = props.user;
    console.log(usersCart);

    let totalSalary = 0;
    for (let i = 0; i < usersCart.length; i++) {
        const userCart = usersCart[i];
         totalSalary = totalSalary + userCart.salary;
    }

    return (
        <div>
            all user total salary: {totalSalary}
        </div>
    );
};

export default UsersCart;