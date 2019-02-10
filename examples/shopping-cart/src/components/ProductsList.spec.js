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
    children: component.children().at(1),
    h3: component.find("h3")
  };
};

describe("ProductsList component", () => {
  it("should render title", () => {
    const { h3 } = setup({ productTitle: "Test Products" });
    expect(h3.text()).toMatch(/^Test Products$/);
  });

  it("should render children", () => {
    const { children } = setup({
      productTitle: "Test Products",
      children: "Test Children"
    });
    expect(children.text()).toMatch(/^Test Children$/);
  });
});
