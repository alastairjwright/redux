import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";

const setup = props => {
  const component = shallow(<Product {...props} />);

  return {
    component: component,
    title: component.find("TitleSpan"),
    price: component.find("PriceSpan"),
    remaining: component.find("RemainingSpan")
  };
};

describe("Product component", () => {
  it("should render title", () => {
    const { title } = setup({ productTitle: "Test Product" });
    expect(title.children().text()).toBe("Test Product");
  });

  it("should render the price", () => {
    const { price } = setup({ price: 9.99 });
    expect(price.children().text()).toBe("$9.99");
  });

  describe("when given inventory", () => {
    it("should render inventory", () => {
      const { remaining } = setup({ quantity: 6 });
      expect(remaining.children().text()).toBe("6 Remaining");
    });
  });
});
