import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";

import configureStore from "../../../configureStore";

import mockResponse from "./mockApiResponse";
import PlainsTrainsCars from "../index";

describe("<DropDown />", () => {
  const AllProviders = ({ children }, store) => (
    <Provider store={store}>{children}</Provider>
  );

  it("renders loading state", () => {
    const store = configureStore();
    const { asFragment } = render(<PlainsTrainsCars />, {
      wrapper: ({ children }) => AllProviders({ children }, store),
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders default state with data", () => {
    const store = configureStore({
      PlanesTrainsCarsReducer: {
        loading: false,
        data: mockResponse,
        filterBy: [],
      },
    });
    const { asFragment } = render(<PlainsTrainsCars />, {
      wrapper: ({ children }) => AllProviders({ children }, store),
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders state after filtering by type train", () => {
    const store = configureStore({
      PlanesTrainsCarsReducer: {
        loading: false,
        data: mockResponse,
        filterBy: [],
      },
    });
    const { asFragment } = render(<PlainsTrainsCars />, {
      wrapper: ({ children }) => AllProviders({ children }, store),
    });
    fireEvent.change(screen.getByTestId("input-type"), {
      target: { value: "train" },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders state after filtering by color & brand", () => {
    const store = configureStore({
      PlanesTrainsCarsReducer: {
        loading: false,
        data: mockResponse,
        filterBy: [],
      },
    });
    const { asFragment } = render(<PlainsTrainsCars />, {
      wrapper: ({ children }) => AllProviders({ children }, store),
    });
    fireEvent.change(screen.getByTestId("input-brand"), {
      target: { value: "EMD GP40" },
    });
    fireEvent.change(screen.getByTestId("input-color"), {
      target: { value: "black" },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders state after cleaning up all filtering by selecting default value on dropdown", () => {
    const store = configureStore({
      PlanesTrainsCarsReducer: {
        loading: false,
        data: mockResponse,
        filterBy: [
          { filterBy: "color", value: "red" },
          { filterBy: "type", value: "car" },
          { filterBy: "brand", value: "Bugatti Veyron" },
        ],
      },
    });
    const { asFragment } = render(<PlainsTrainsCars />, {
      wrapper: ({ children }) => AllProviders({ children }, store),
    });
    fireEvent.change(screen.getByTestId("input-brand"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("input-color"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("input-type"), {
      target: { value: "" },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders state after cleaning the filters", () => {
    const store = configureStore({
      PlanesTrainsCarsReducer: {
        loading: false,
        data: mockResponse,
        error: false,
        filterBy: [
          { filterBy: "color", value: "red" },
          { filterBy: "type", value: "car" },
        ],
      },
    });
    act(() => {
      const { asFragment } = render(<PlainsTrainsCars />, {
        wrapper: ({ children }) => AllProviders({ children }, store),
      });
      fireEvent.click(screen.getByTestId("button-clear"));
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders error message", () => {
    const store = configureStore({
      PlanesTrainsCarsReducer: {
        loading: false,
        data: [],
        filterBy: [],
        error: "error",
      },
    });
    const { asFragment } = render(<PlainsTrainsCars />, {
      wrapper: ({ children }) => AllProviders({ children }, store),
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
