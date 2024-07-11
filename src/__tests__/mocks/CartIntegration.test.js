import { Provider } from "react-redux";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import store from "../../utils/redux-toolkit/store";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/Items.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Test Cart flow", () => {
  it("Should load Items to add to Cart", () => {
    render(
      <Provider store={store}>
        <Menu itemCategories={MOCK_DATA} />
      </Provider>
    );

    const recommendedItemsAccordion = screen.getByText("Recommended(20)");
    expect(recommendedItemsAccordion).toBeInTheDocument();

    fireEvent.click(recommendedItemsAccordion);

    const items = screen.getAllByTestId("items");

    expect(items.length).toBe(20);
  });

  it("Should Add Items to Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Menu itemCategories={MOCK_DATA} />
        </Provider>
      </BrowserRouter>
    );

    const recommendedItemsAccordion = screen.getByText("Recommended(20)");

    fireEvent.click(recommendedItemsAccordion);

    const items = screen.getAllByTestId("items");

    const recommendedAddBtns = screen.getAllByRole("button", { name: "Add+" });

    expect(recommendedAddBtns.length).toBe(20);

    fireEvent.click(recommendedAddBtns[0]);

    const pastaItemsAccordion = screen.getByText("Pasta(9)");

    fireEvent.click(pastaItemsAccordion);

    const pastaAddBtns = screen.getAllByRole("button", { name: "Add+" });

    expect(pastaAddBtns.length).toBe(9);

    fireEvent.click(pastaAddBtns[2]);

    const noOfCartItems = screen.getByTestId("noOfCartItems");
    expect(noOfCartItems.textContent).toBe("2");
  });

  it("Should Add Items to Cart Page", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Menu itemCategories={MOCK_DATA} />
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getAllByTestId("cart-items");
    expect(cartItems.length).toBe(2);

    const placeOrderBtn = screen.getByRole("button", { name: "Place Order" });
    expect(placeOrderBtn).toBeInTheDocument();
  });
});
