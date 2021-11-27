import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>this is CategoryDetails</h1>
            <h3>selected category {category}</h3>
        </div>
    );
};

export default CategoryDetails;