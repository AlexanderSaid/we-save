import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../App";
import TEST_ID_HOME from "../pages/Home/Home.testid";

beforeEach(() => {
  fetch.resetMocks();
});

describe("Routing", () => {
  it("Path '/' should go to Home page ", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId(TEST_ID_HOME.container)).toBeInTheDocument();
  });
});
