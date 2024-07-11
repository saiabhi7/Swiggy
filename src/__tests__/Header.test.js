import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../utils/redux-toolkit/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

it("Should render Header Component and check if all Links are loaded", () => {
  const contactUs = screen.getByText("Contact");

  expect(contactUs).toBeInTheDocument();
});

it("Should have Cart on Header Component", () => {
  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});
