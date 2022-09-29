import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduce,
  increaseProduce,
  decreaseProduce,
  numberProduce,
  getCart,
} from "../../store/cart";

function CartItem({ item }) {
  const countState = useSelector(getCart);
  const id = item.id;
  const count = countState[id].count;

  // const [count, setCount] = useState(1);
  // console.log(count[id]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setCount(item.count);
  // }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => dispatch(numberProduce(id, e.target.value))}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(increaseProduce(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(decreaseProduce(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeProduce(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
