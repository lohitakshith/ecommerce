import React, { Component } from 'react';
import { ECommerceContext } from '../context/context';
import { ADD_PRODUCT } from "../Actions"
const Product = (props) => {
    const { id, name, price, seller } = props.product
    const { dispatch } = React.useContext(ECommerceContext)
    return ( <div className="card mt-2">
    <div className="card-body">
        <p className="card-title">{name}</p>
        <p className="card-text">{price}</p>
        <h6 className="card-text"> by {seller}</h6>
        <button 
        className="btn btn-primary" 
        onClick={() => dispatch({type:ADD_PRODUCT,payload:{id}})}>ADD TO CART</button>
    </div>
</div>) ;
}
 
export default Product;