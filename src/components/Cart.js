import React from 'react';
import { ECommerceContext } from '../context/context';
import CartProduct from './CartProduct';
const Cart = () => {
    const {state} = React.useContext(ECommerceContext)
    return <>
    {state.cartProducts.length ? <div className="d-flex flex-wrap">{state.cartProducts.map(product =>
    <CartProduct key={product.id} product={product} />) }</div> : <h5 className="text-center mt-3">Your cart is empty</h5> }
    </>
}
 
export default Cart;