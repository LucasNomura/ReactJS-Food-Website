import { useDispatch, useSelector } from "react-redux";
import { XIcon, PlusIcon, MinusIcon } from "lucide-react";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  toggleCart,
} from "../../redux/cart/slice";
import { selectTotalPrice } from "./cart.selectors";

function Cart() {
  const { products } = useSelector((reducer) => reducer.cart);
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-end">
      <button
        onClick={() => dispatch(toggleCart())}
        className="w-full h-full"
      />
      <div className="bg-white h-full w-[800px] px-7">
        <div className="flex text-3xl font-bold m-12 justify-between">
          <p className="">Cart</p>
          <button onClick={() => dispatch(toggleCart())}>
            <XIcon />
          </button>
        </div>

        <div className="h-[700px] overflow-auto">
          {products.map((product) => (
            <div key={product.id} className="flex w-[545px] pb-10">
              <img
                alt={product.name}
                className="w-[250px] h-full rounded-lg"
                src={product.image}
              />
              <div className="py-2 px-4 font-bold">
                <p>{product.name}</p>
                <p>R$ {product.price * product.quantity}</p>
                <div className="flex gap-2 mt-10">
                  <button
                    className="hover:text-slate-400"
                    onClick={() => dispatch(decreaseProductQuantity(product))}
                  >
                    <MinusIcon />
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    className="hover:text-slate-400"
                    onClick={() => dispatch(increaseProductQuantity(product))}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="font-bold text-3xl p-6 flex justify-between">
          <p>Total:</p>
          <p>R$ {useSelector(selectTotalPrice)}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
