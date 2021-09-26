import React, {useContext, useEffect, useState} from 'react';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';
import {CategoryContext} from  "../../App"

const allProducts = [
    {name: "Lenovo", category: "laptop"},
    {name: "Asus", category: "laptop"},
    {name: "Hp", category: "laptop"},

    {name: "Nokia", category: "Mobile"},
    {name: "Samsung", category: "Mobile"},
    {name: "Redmi", category: "Mobile"},

    {name: "Nikon", category: "camera"},
    {name: "Canon", category: "camera"},
    {name: "Sony", category: "camera"},

]

const Categories = (props) => {
    // const {count} = props;
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchedProduct = allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProduct);
    }, [category])

    return (
        <div>
            <h3>this is categories {}</h3>
            {
                products.map(product => <CategoriesDetail product={product} />)
            }
        </div>
    );
};

export default Categories;