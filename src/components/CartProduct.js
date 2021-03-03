import React, { Component } from 'react';
import { ECommerceContext } from '../context/context';
import { REMOVE_PRODUCT,QUANTITY_DECREMENT, QUANTITY_INCREMENT } from "../Actions"
import "../index.css"
const CartProduct = (props) => {
    const { id, name, price, quantity,seller } = props.product
    const { dispatch } = React.useContext(ECommerceContext)
    return ( <div className="card mt-2">
    <div className="card-body">
    <p className="card-title">{name}</p>
    <p className="card-text">{price}</p>
    <h6 className="card-text"> by {seller}</h6>
    <button 
        className="border border-dark rounded-btn"
        onClick={() => dispatch({type:QUANTITY_DECREMENT,payload:{id}})} disabled={quantity === 1 ? true : false}>-</button>
        <span className="border border-dark mx-2 px-3 py-1">{quantity}</span>
        <button 
        className="border border-dark rounded-btn" 
        onClick={() => dispatch({type:QUANTITY_INCREMENT,payload:{id}})}>+</button>
        <button 
        className="btn btn-danger ml-3" 
        onClick={() => dispatch({type:REMOVE_PRODUCT,payload:{id}})}>REMOVE</button>
    </div>
</div>) ;
}
 
export default CartProduct;