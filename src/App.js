import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { store } from "./store";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";



function App() {
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());

  }, [cartItems])
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
