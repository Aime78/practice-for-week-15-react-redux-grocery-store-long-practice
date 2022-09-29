import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import ProduceList from "./components/ProduceList";
import { setInitialValue, toggleDisplay } from "./store/cartDisplay";
import { populateProduce } from "./store/produce";

function App() {
  // const [showCart, setShowCart] = useState(false);
  const showCart = useSelector((state) => state.cartDisplay);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(populateProduce());
    dispatch(setInitialValue());
  }, []);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button
          className="checkout-button"
          onClick={() => dispatch(toggleDisplay(true))}
        >
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: "300px" } : {}}>
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: "translateX(-100%)" } : {}}
      >
        <div className="sidebar-header">
          <button
            className="arrow-button"
            onClick={() => dispatch(toggleDisplay(false))}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
