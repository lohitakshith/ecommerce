import React from 'react';
import PriceFilter from './Prices';
import Product from './Product';
import RatingFilter from './Ratings';
import "../index.css"
import { ECommerceContext } from '../context/context';

const Home = () => {
 const {state} = React.useContext(ECommerceContext)
    return <div className="container-fluid">
        <div className="d-flex flex-row">
        <div className="d-flex flex-column">
<PriceFilter />
<RatingFilter />
        </div>
        <div className="d-flex flex-wrap">
                {state.filterProducts.map(product =>
    <Product key={product.id} product={product} />) }
    </div>
    </div></div>


}
 
export default Home;