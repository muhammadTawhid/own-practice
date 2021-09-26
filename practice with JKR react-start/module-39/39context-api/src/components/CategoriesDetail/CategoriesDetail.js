import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetail = (props) => {
    // const category = useContext(CategoryContext);
    const {name} = props.product;
    return (
        <div>
            <h4>this is category details </h4>
            <h5>this is your selected product {name}</h5>
        </div>
    );
};

export default CategoriesDetail;