import React from "react";
import { render } from "@testing-library/react";
import { ReactComponent as CarIcon } from "../../../assets/car.svg";

import Icon from "../index";

describe("<Icon />", () => {
  it("renders icon with default values", () => {
    const { asFragment } = render(<Icon as={CarIcon} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders icon with custom width", () => {
    const { asFragment } = render(<Icon as={CarIcon} width="16px" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
