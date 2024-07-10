import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import WhatsOnYourMind from "./WhatsOnYourMind";
import useDebounce from "../utils/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurants } from "../utils/redux-toolkit/restaurantSlice";

const Body = () => {
  const [header, setHeader] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [whatsOnYourMindItems, setWhatsOnYourMindItems] = useState([]);
  const [whatsOnYourMindHeader, setWhatsOnYourMindHeader] = useState("");

  const [restaurantsToDisplay, setRestaurantsToDisplay] = useState([]);

  const dispatch = useDispatch();

  const restaurants = useSelector((store) => store.restaurants.restaurants);

  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    const filteredRestaurants = restaurants?.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        .includes(debounceValue.toLowerCase());
    });
    setRestaurantsToDisplay(filteredRestaurants);
  }, [debounceValue]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonResponse = await data.json();

    const allCards = jsonResponse?.data?.cards;
    const topBrandsCard = allCards?.filter(
      (card) => card?.card?.card["id"] === "top_brands_for_you"
    )[0];
    const res =
      topBrandsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setHeader(topBrandsCard?.card?.card?.header?.title);
    setRestaurantsToDisplay(res);
    dispatch(getAllRestaurants(res));

    const whatsOnYourMind = allCards?.filter(
      (card) => card?.card?.card["id"] === "whats_on_your_mind"
    )[0];
    const whatsOnYourMindItems =
      whatsOnYourMind?.card?.card?.gridElements?.infoWithStyle?.info;
    setWhatsOnYourMindHeader(whatsOnYourMind?.card?.card?.header?.title);
    setWhatsOnYourMindItems(whatsOnYourMindItems);
  };

  if (restaurantsToDisplay.length === 0) return <div>No Products</div>;

  return (
    <div className="m-2 p-2">
      <WhatsOnYourMind
        whatsOnYourMindHeader={whatsOnYourMindHeader}
        whatsOnYourMindItems={whatsOnYourMindItems}
      />
      <hr />
      <div className="p-4 w-1/4">
        <input
          type="text"
          className="w-full border-black border-2 rounded-3xl p-2"
          placeholder="Search Restaurants..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <RestaurantList header={header} restaurants={restaurantsToDisplay} />
    </div>
  );
};

export default Body;
