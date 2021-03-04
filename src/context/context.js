import React from 'react';
import reducer from './reducer';
import { products } from "../Products"

export const ECommerceContext = React.createContext()

const ContextProvider = (props) => {
    
    const [state, dispatch] = React.useReducer(reducer, {
        products,
        cartProducts: [],
        startPrice: 0,
        endPrice: 0,
        filterProducts: products
    })
    return(
    <ECommerceContext.Provider value = {{state,dispatch}} > 
        {props.children }
     </ECommerceContext.Provider>)
}
export default ContextProvider
