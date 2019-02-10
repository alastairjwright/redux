import shop from "../api/shop";
import * as types from "../constants/ActionTypes";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

function getProducts() {
  return fetch("http://tech.work.co/shopping-cart/products.json")
    .then(handleErrors)
    .then(response => response.json());
}

export function fetchProducts() {
  return dispatch => {
    return getProducts().then(json => {
      dispatch(receiveProducts(json));
      return json;
    });
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const increaseCartQuantityUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

const decreaseCartQuantityUnsafe = productId => ({
  type: types.DECREASE_QUANTITY,
  productId
});

export const increaseCartQuantity = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(increaseCartQuantityUnsafe(productId));
  }
};

export const removeFromCart = productId => (dispatch, getState) => {
  const currentQuantity = getState().cart.quantityById[productId];
  dispatch({
    type: types.REMOVE_FROM_CART,
    product: {
      productId,
      currentQuantity: currentQuantity
    }
  });
};

export const decreaseCartQuantity = productId => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(decreaseCartQuantityUnsafe(productId));
  }
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};
