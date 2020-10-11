import React from "react";
import { render } from "@testing-library/react";

import DropDown from "../index";

describe("<DropDown />", () => {
  const options = ["car", "train", "plane"];
  const onSelect = jest.fn();
  it("renders nothing since no options are passed", () => {
    const { asFragment } = render(<DropDown name="type" onSelect={onSelect} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders DropDown with defined values", () => {
    const { asFragment } = render(
      <DropDown options={options} name="type" onSelect={onSelect} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
