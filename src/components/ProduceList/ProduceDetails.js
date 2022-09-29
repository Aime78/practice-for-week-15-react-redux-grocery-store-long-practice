import { useDispatch } from "react-redux";
import { addProduce } from "../../store/cart";
import { toggleDisplay } from "../../store/cartDisplay";
import { toggleLike } from "../../store/produce";
function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button className={"like-button" + (produce.liked ? " selected" : "")}>
          <i
            className={"fas fa-heart"}
            onClick={() => {
              dispatch(toggleLike(produce.id));
            }}
          />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {
            dispatch(addProduce(produce.id));
            dispatch(toggleDisplay(true));
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
