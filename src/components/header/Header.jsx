import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/header/slice";
import { useEffect } from "react";
import { toggleCart } from "../../redux/cart/slice";
import { selectProductsCount } from "../cart/cart.selectors";

function Header() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  function loginUser() {
    if (isAuthenticated) {
      return logout();
    }

    return loginWithRedirect();
  }

  useEffect(() => {
    dispatch(userLogin(isAuthenticated));
  });

  return (
    <div className="bg-black w-full h-12 flex items-center p-5 gap-5 fixed">
      <div className="text-white text-2xl w-full font-thin">Food Service</div>
      <button
        onClick={() => dispatch(toggleCart(true))}
        className="text-white items-center flex font-bold"
      >
        <ShoppingCart size={18} strokeWidth={2.5} />(
        {useSelector(selectProductsCount)})
      </button>
      <button onClick={() => loginUser()} className=" text-white font-bold">
        {isAuthenticated ? "logout" : "login"}
      </button>
    </div>
  );
}

export default Header;
