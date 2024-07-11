import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const noOfCartItems = useSelector((store) => store.cart.cartItems.length);

  return (
    <div className="flex justify-between m-2 p-4 border border-solid border-black">
      <div className="logo-container">
        <img
          className="w-20"
          alt="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="p-4 flex justify-center items-center">
        <ul className="flex">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">🏠Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/profile">
            <li className="px-4">Profile</li>
          </Link>
          <Link to="/cart">
            <li className="px-6 relative flex justify-between">
              <div className="font-bold">Cart</div>
              <div
                data-testid="noOfCartItems"
                className="absolute flex justify-center items-center font-bold right-0 top-0 w-5 h-5 text-xs rounded-full bg-green-400"
              >
                {noOfCartItems}
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
