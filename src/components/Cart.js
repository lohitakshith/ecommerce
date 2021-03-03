import React from 'react';
import { ECommerceContext } from '../context/context';
import CartProduct from './CartProduct';
const Cart = () => {
    const {state, dispatch} = React.useContext(ECommerceContext)
    return <>
    {state.cartProducts.map(product =>
    <CartProduct key={product.id} product={product} />) }
    </>
}
 
export default Cart;