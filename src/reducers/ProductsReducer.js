import {
    FETCHPRODUCTS_BEGIN,
    FETCHPRODUCTS_SUCCESS,
    FETCHPRODUCTS_FAILURE,
    ADD_TO_CART,
    INCREASE_PRODUCT,
    DECREASE_PRODUCT,
    REMOVE_PRODUCT,
    CLEAR,
    sumItems,
    SET_SELECTED_TABLE,
    sumNumber,
    POSTPRODUCTS_BEGIN,
    POSTPRODUCTS_SUCCESS,
    POSTPRODUCTS_FAILURE,
    ADD_TO_CHECKOUT,
    sumCheckouts
} from '../actions/SimpleActions';

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const tableNumber = localStorage.getItem('table') ? JSON.parse(localStorage.getItem('table')) : []

const checkout = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

const initialState = {
    error: null,
    loading: false,
    items: [],
    cartItems: storage,
    ...sumItems(storage),
    tableDetails: tableNumber,
    checkoutItems : checkout,
    ...sumCheckouts(checkout)

}


const selectData = (state = initialState, action) => {
    switch (action.type) {
        case FETCHPRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCHPRODUCTS_SUCCESS:
            return {
                ...state,
                items: action.payload.products,
                unitPrice: action.payload.products,
                loading: false
            }
        case FETCHPRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                items: [],
                loading: false
            }
        case ADD_TO_CART:
            let cartId = action.payload.cart.id
            let cartInstructions = action.payload.cart.instructions

            if (!state.cartItems.find(item => item.id === cartId && item.instructions === cartInstructions
             )) {
                state.cartItems.push({
                    ...action.payload.cart
                })
                console.log('here1')
            }

            else if (state.cartItems.find(item => item.instructions === cartInstructions && item.id === cartId
                 )) {

   
                state.cartItems[state.cartItems.findIndex(item => item.id === cartId 
                    && item.instructions === cartInstructions)].quantity++
            
                console.log('here2')
            }
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case INCREASE_PRODUCT:
            let id = action.payload.data.id
            let instructions = action.payload.data.instructions 
            let quantity = action.payload.data.quantity

            if (state.cartItems.find(item => item.id === id && item.instructions === instructions )) {
                
                state.cartItems[state.cartItems.findIndex(item => item.id === id  && item.instructions === instructions  )].quantity++
                console.log('here1')

            }
            else if (state.cartItems.find(item => item.id === id && item.instructions !== instructions )) {

                state.cartItems[state.cartItems.findIndex(item => item.id === id && item.instructions !== instructions   )].quantity++
                console.log('here2')
            }   
            else if (state.cartItems.find(item => item.id && item.instructions !== instructions && item.quantity === quantity )) {

                state.cartItems[state.cartItems.findIndex(item => item.id === id && item.instructions !== instructions   )].quantity++
                console.log('here3')
            }   
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case DECREASE_PRODUCT:
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.data.id
                && item.instructions === action.payload.data.instructions)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case REMOVE_PRODUCT:
            let index = state.cartItems.findIndex(item => item.id === action.payload.data.id 
                && item.instructions === action.payload.data.instructions)
            state.cartItems.splice(index, 1)
            console.log(action.payload.data)
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems ]
            }
        case CLEAR:
            return {
                cartItems: [],
                ...sumItems([])
            }
        case SET_SELECTED_TABLE:
            state.tableDetails.push({
                ...action.payload.data
                })
            console.log(action.payload.data)
            return {
                ...state,
                ...sumNumber(state.tableDetails),
                tableDetails: [...state.tableDetails]
            }
        case POSTPRODUCTS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case POSTPRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                response: action.payload.data
            }
        case POSTPRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case ADD_TO_CHECKOUT:
            let checkoutID = action.payload.data.id
            let checkoutInstructions = action.payload.data.instructions

            if (!state.checkoutItems.find(item => item.id === checkoutID && item.instructions === checkoutInstructions
                )) {
                state.checkoutItems.push({
                    ...action.payload.data
                })
                console.log('here1')
            }

            else if (state.checkoutItems.find(item => item.instructions === checkoutInstructions && item.id === checkoutID
                    )) {


                // state.checkoutItems[state.checkoutItems.findIndex(item => item.id === checkoutID 
                //     && item.instructions === checkoutInstructions)].quantity++
 
                    state.checkoutItems.push({
                        ...action.payload.data
                    })
                console.log('here2')
            }
            // else if ((!state.checkoutItems.find(item => item.id === checkoutID && item.instructions === checkoutInstructions
            //     ))&& state.checkoutItems.find(item => item.instructions === checkoutInstructions && item.id === checkoutID )) {
            //     state.checkoutItems.push({
            //         ...action.payload.data
            //     })
            //     console.log('here3')
            // }
            return {
                ...state,
                ...sumCheckouts(state.checkoutItems),
                checkoutItems: [...state.checkoutItems]
            }
        default:
            return state;
    }
}

export default selectData