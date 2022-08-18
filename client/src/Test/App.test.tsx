/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home";
import {
  MAIN_HOME_HEADER,
  MAIN_HOME_NUMBER_ONE_INPUT,
  MAIN_HOME_NUMBER_TWO_INPUT,
  MAIN_HOME_ADD_BUTTON,
  MAIN_HOME_RESULT,
} from "../Config/dataTestIds";

describe("renders home page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders home header", () => {
    const homeHeader = screen.getByTestId(MAIN_HOME_HEADER);

    expect(homeHeader).toBeInTheDocument();
  });

  it("renders home number one input", () => {
    const homeNumOneInput = screen.getByTestId(MAIN_HOME_NUMBER_ONE_INPUT);

    expect(homeNumOneInput).toBeInTheDocument();
  });

  it("renders home number two input", () => {
    const homeNumTwoInput = screen.getByTestId(MAIN_HOME_NUMBER_TWO_INPUT);

    expect(homeNumTwoInput).toBeInTheDocument();
  });

  it("renders home add button", () => {
    const homeAddButton = screen.getByTestId(MAIN_HOME_ADD_BUTTON);

    expect(homeAddButton).toBeInTheDocument();
  });
});
