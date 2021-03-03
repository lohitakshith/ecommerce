import React from 'react';
import {
    products
} from "../Products"
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    QUANTITY_INCREMENT,
    QUANTITY_DECREMENT
} from "../Actions"

// const addProduct = (state, action) => {
//     const cartProducts = state.cartProducts
//     const cartProductIndex = cartProducts.findIndex(product => product.id === action.payload.id)
//     if (cartProductIndex < 0) {
//         const product = products.find(product => product.id === action.payload.id)
//         cartProducts.push({
//             ...product,
//             quantity: 1
//         })
//     }
//     return {
//         ...state,
//         cartProducts
//     }
// }
// const removeProduct = (state, action) => {
//     const newProducts = state.cartProducts.filter(product => product.id !== action.payload.id)
//     return {
//         ...state,
//         cartProducts: newProducts
//     }
// }
// const quantityIncrement = (state, action) => {
//     console.log("quantityIncrement")
//     const newProducts = state.cartProducts.map(product => {
//         if (product.id === action.payload.id) {
//             return {
//                 ...product,
//                 quantity: product.quantity + 1
//             }
//         }
//         return product
//     })
//     return {
//         ...state,
//         cartProducts:newProducts
//     }
// }
// const quantityDecrement = (state, action) => {
//     const newProducts = state.cartProducts.map(product => {
//         if (product.id === action.payload.id) {
//             return {
//                 ...product,
//                 quantity: product.quantity - 1
//             }
//         }
//         return product
//     })
//     return {
//         ...state,
//         cartProducts:newProducts
//     }
// }
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const cartProducts = state.cartProducts
            const cartProductIndex = cartProducts.findIndex(product => product.id === action.payload.id)
            if (cartProductIndex < 0) {
                const product = products.find(product => product.id === action.payload.id)
                cartProducts.push({
                    ...product,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartProducts
            }        
        case REMOVE_PRODUCT:
            const newProducts1 = state.cartProducts.filter(product => product.id !== action.payload.id)
            return {
                ...state,
                cartProducts: newProducts1
            }        
        case QUANTITY_INCREMENT:
            const newProducts2 = state.cartProducts.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            })
            return {
                ...state,
                cartProducts:newProducts2
            }       
        case QUANTITY_DECREMENT:
            const newProducts3 = state.cartProducts.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product
            })
            return {
                ...state,
                cartProducts:newProducts3
            }
        default:
            return state
    }

}

export default reducer;