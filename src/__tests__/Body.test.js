import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../utils/redux-toolkit/store";
import MOCK_DATA from "./mocks/RestaurantsMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import useDebounce from "../utils/useDebounce";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should render Body Component", () => {
  beforeAll(async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </BrowserRouter>
      )
    );
  });
  it("Should load Restaurants on Body component render", () => {
    const restaurantCards = screen.getAllByTestId("restaurant-card");

    expect(restaurantCards.length).toBe(20);
  });

  /* it("Should have Search box in the Body Component", () => {
    const searchBox = screen.getByRole("textbox");

    expect(searchBox).toBeInTheDocument();
  }); */
});
