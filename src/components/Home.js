import React from 'react';
import { products } from "../Products"
import Product from './Product';

const Home = () => {

    return <div className="container-fluid">
    {products.map(product =>
    <Product key={product.id} product={product} />) }
    </div>

}
 
export default Home;