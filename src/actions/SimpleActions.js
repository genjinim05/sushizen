
export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetch('http://localhost:60348/api/products/')
            .then(handleErrors)
            .then(res => res.json())
            .then(results => {
                dispatch(fetchProductsSuccess(results));
                return results;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCHPRODUCTS_BEGIN = 'FETCHPRODUCTS_BEGIN';
export const FETCHPRODUCTS_SUCCESS = 'FETCHPRODUCTS_SUCCESS';
export const FETCHPRODUCTS_FAILURE = 'FETCHPRODCUTS_FAILURE';

export const fetchProductsBegin = () => ({
    type: FETCHPRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCHPRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = error => ({
    type: FETCHPRODUCTS_FAILURE,
    payload: { error }
});

export const INCREASE_PRODUCT = 'INCREASE_PRODUCT';
export const DECREASE_PRODUCT = 'DECREASE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const increaseProduct = data => ({
    type: INCREASE_PRODUCT,
    payload: { data }
});

export const decreaseProduct = data => ({ 
    type: DECREASE_PRODUCT,
    payload: { data } 
});

export const removeProduct = data => ({
    type: REMOVE_PRODUCT,
    payload: { data }
})

export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = cart => ({
    type: ADD_TO_CART,
    payload: { cart }
});

export const CLEAR = "CLEAR"

export const clearCart = () => ({
    type: CLEAR
});

const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let sub = cartItems.reduce((total,product) => total + product.price * product.quantity, 0)
    let subtotal = parseFloat((sub).toFixed(2), 10)
    let servicetax = parseFloat((subtotal * 0.06).toFixed(2), 10)
    let total = (subtotal + servicetax)
    return {itemCount, subtotal, servicetax, total}
}
