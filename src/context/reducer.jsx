

export const initialState = {
    foodList: [],
    loadingFoods: false,
    cart: [],
    cartItems:{},
    totalAmount:null,
    deliveryFee:3
}

export function reducer(state, action) {
    switch (action.type) {
        case "FETCHING_FOODS_DATA":
            return {
                ...state,
                loadingFoods: true,
            }
        case "FETCHED_FOODS_DATA":
            return {
                ...state,
                loadingFoods: false,
                foodList: action.payload
            }
        case "FETCHED_FOODS_DATA_ERROR":
            return {
                ...state,
                loadingFoods: true
            }
        case "ADD_CART_DATA":
            if (state.cart.find(item => item._id === action.payload._id)) {
                return {
                    ...state,
                }
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    cartItems:{...state.cartItems, [action.payload._id]: 1}
                }
            }
        case "PLUS_TO_CART":
            if (state.cart.find(item => item._id === action.payload._id)) {
                return {
                    ...state,
                    cartItems:{...state.cartItems, [action.payload._id]: (state.cartItems[action.payload._id]) + 1}
                }
            }
            else {
                return {
                    ...state,
                    cartItems:{...state.cartItems, [action.payload._id]: 1}
                }
            }
        case "MINUS_TO_CART":
            if (state.cartItems[action.payload._id]!==1) {
                return {
                    ...state,
                    cartItems:{...state.cartItems, [action.payload._id]: (state.cartItems[action.payload._id]) - 1}
                }
            }
            else {
                return {
                    ...state,
                    cartItems:{...state.cartItems, [action.payload._id]: (state.cartItems[action.payload._id]) - 1},
                    cart: state.cart.filter(item => item._id !== action.payload._id),
                    
                }
            }
        case "DELETE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload._id),
                cartItems:{...state.cartItems, [action.payload._id]:0}
            }
        case "TOTAL_AMOUNT":
            state.totalAmount = null
            state.cart.map(item=>{
                state.totalAmount += item.price * state.cartItems[item._id]
            })
            return {
                ...state
            }

        default: state
    }

}

    
