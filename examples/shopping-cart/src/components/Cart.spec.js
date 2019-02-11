import React from "react";
import { render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Cart from "./Cart";
import CartProduct from "./CartProduct";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = (total, tax, grandTotal, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn()
  };

  const component = render(
    <Provider store={store}>
      <Cart
        products={products}
        total={total}
        tax={tax}
        grandTotal={grandTotal}
        {...actions}
      />
    </Provider>
  );

  return {
    component: component,
    actions: actions,
    checkoutButton: component.find("CheckoutButton"),
    cartProducts: component.find(CartProduct),
    subtotalText: component.find(".subtotal .text"),
    subtotalNumber: component.find(".number"),
    errorMessage: component.find(".error-message")
  };
};

describe("Cart component", () => {
  it("should display add some products message", () => {
    const { errorMessage } = setup();
    expect(errorMessage.text()).toBe("Please add some products to your cart.");
  });
});
