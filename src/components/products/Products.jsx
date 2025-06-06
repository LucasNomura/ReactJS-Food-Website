import { useDispatch, useSelector } from "react-redux";
import products from "../products-item/items";
import { addProduct } from "../../redux/cart/slice";
import { useAuth0 } from "@auth0/auth0-react";

function Products() {
  const dispatch = useDispatch();
  const { isUserAuthenticated } = useSelector(
    (rootReducer) => rootReducer.header
  );
  const { loginWithRedirect } = useAuth0();

  function onAddProduct(product) {
    if (isUserAuthenticated) {
      return dispatch(addProduct(product));
    }
    return loginWithRedirect();
  }

  return (
    <div className="pt-5">
      <h1 className="text-2xl font-bold px-14 py-10">Em destaque</h1>

      <div className="p-10 grid grid-cols-4 place-items-center">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col w-[300px] pb-10">
            <button
              onClick={() => onAddProduct(product)}
              className="rounded-lg shadow-md shadow-black h-48"
            >
              <img
                alt={product.name}
                className="w-full h-full rounded-lg"
                src={product.image}
              />
            </button>
            <div className="flex justify-between py-2 px-4 font-bold">
              <p>{product.name}</p>
              <p>R${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
