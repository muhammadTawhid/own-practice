import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState = {
    cart: [],
    products: [
        { name: "Asus laptop", id: 1 },
        { name: "Hp laptop", id: 2 },
        { name: "Toshiba laptop", id: 3 },
        { name: "Accer laptop", id: 4 },
        { name: "Macbook m12", id: 5 },
        { name: "Sony camera", id: 6 },
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart }

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id)
            return { ...state, cart: remainingCart };

        default:
            return state
    }
}

export default cartReducers;