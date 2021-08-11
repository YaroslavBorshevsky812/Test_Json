
const initialState = {
    products: [],
    cart: [],
    commonPrice: 0
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD':
            return {
                ...state,
                    products: action.payload
            }
        case 'ADD': 
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                    cart: inCart ? state.cart.map(item => 
                        item.id === action.payload.id ? 
                            {...item, qty: action.payload.qty, commonSum: action.payload.commonSum} 
                                : item) 
                                    : [...state.cart, action.payload]
            }
        default:
            return state
    }
}
