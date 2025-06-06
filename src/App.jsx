import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";

import Products from "./components/products/Products";
import { useSelector } from "react-redux";

function App() {
  const { isCartVisible } = useSelector((reducer) => reducer.cart);

  return (
    <div>
      <Header />
      <Products />
      {isCartVisible && <Cart />}
    </div>
  );
}

export default App;
