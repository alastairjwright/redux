import React from "react";
import { shallow } from "enzyme";
import ProductsList from "./ProductsList";

const setup = props => {
  const component = shallow(
    <ProductsList productTitle={props.productTitle}>
      {props.children}
    </ProductsList>
  );

  return {
    component: component,
    children: component.children()
  };
};

describe("ProductsList component", () => {
  it("should render children", () => {
    const { children } = setup({
      productTitle: "Test Products",
      children: "Test Children"
    });
    expect(children.text()).toMatch(/^Test Children$/);
  });
});
