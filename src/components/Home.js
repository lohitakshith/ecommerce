import React from 'react';
import { products } from "../Products"
import PriceFilter from './Prices';
import Product from './Product';
import RatingFilter from './Ratings';
import "../index.css"

const Home = () => {

    return <div className="container-fluid">
        <div className="d-flex flex-row">
        <div className="d-flex flex-column">
<PriceFilter />
<RatingFilter />
        </div>
        <div className="d-flex flex-wrap">    {products.map(product =>
    <Product key={product.id} product={product} />) }
    </div>
    </div></div>


}
 
export default Home;