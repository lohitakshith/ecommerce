import {
    products
} from "../Products"
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    QUANTITY_INCREMENT,
    QUANTITY_DECREMENT,
    END_PRICE_CHANGE,
    START_PRICE_CHANGE,
    APPLY_PRICE_FILTER
} from "../Actions"

const addProduct = (state, action) => {
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
}
const removeProduct = (state, action) => {
    const newProducts = state.cartProducts.filter(product => product.id !== action.payload.id)
    return {
        ...state,
        cartProducts: newProducts
    }
}
const quantityIncrement = (state, action) => {
    console.log("quantityIncrement")
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
        cartProducts: newProducts2
    }
}
const quantityDecrement = (state, action) => {
    const newProducts = state.cartProducts.map(product => {
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
        cartProducts: newProducts
    }
}

const applyFilter = (state) => {
    const min = Math.min(state.startPrice, state.endPrice)
    const max = Math.max(state.startPrice, state.endPrice)

    const filterProducts = state.products.filter(product => {
        if (product.price >= min && product.price <= max) 
            return product        
    })
    return {
        ...state,
        filterProducts
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProduct(state, action)
        case REMOVE_PRODUCT:
            return removeProduct(state, action)
        case QUANTITY_INCREMENT:
            return quantityIncrement(state, action)
        case QUANTITY_DECREMENT:
            return quantityDecrement(state, action)
        case START_PRICE_CHANGE:
            return {
                ...state, startPrice: action.payload
            }
            case END_PRICE_CHANGE:
                return {
                    ...state, endPrice: action.payload
                }
                case APPLY_PRICE_FILTER:
                    return applyFilter(state)
                default:
                    return state
    }

}

export default reducer;