import React from 'react';
import useProduct from '../../hooks/useProduct';

const Shop = () => {
    const [products,setProduct]=useProduct()
    console.log(products)
    return (
        <div>
            <h1>This is home</h1>
        </div>
    );
};

export default Shop;