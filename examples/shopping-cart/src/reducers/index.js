import { combineReducers } from "redux";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";

export default combineReducers({
  cart,
  products
});

const newYorkSalesTax = 0.08875;

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getTax = state => (getTotal(state) * newYorkSalesTax).toFixed(2);

export const getGrandTotal = state =>
  (parseInt(getTotal(state)) + parseInt(getTax(state))).toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));

export const getCartProductsQuantity = state =>
  getAddedIds(state).reduce(
    (total, id) => total + 1 * getQuantity(state, id),
    0
  );
