import React from 'react';
import reducer from './reducer';

export const ECommerceContext = React.createContext()

const ContextProvider = (props) => {
    
    const [state, dispatch] = React.useReducer(reducer, {cartProducts:[]})
    return(
    <ECommerceContext.Provider value = {{state,dispatch}} > 
        {props.children }
     </ECommerceContext.Provider>)
}
export default ContextProvider
