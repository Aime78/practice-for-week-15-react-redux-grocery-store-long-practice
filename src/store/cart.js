const ADDPRODUCE = "produce/addproduce";
const REMOVEPRODUCE = "produce/removeproduce";
const INCREASEPRODUCE = "produce/increaseproduce";
const DECREASEPRODUCE = "produce/decreaseproduce";
const NUMBERPRODUCE = "produce/numberproduce";
const EMPTYCART = "produce/emptycart";

export const emptyCart = () => {
  return {
    type: EMPTYCART,
  };
};

export const addProduce = (id) => {
  return {
    type: ADDPRODUCE,
    id,
  };
};

export const removeProduce = (id) => {
  return {
    type: REMOVEPRODUCE,
    id,
  };
};

export const increaseProduce = (id) => {
  return {
    type: INCREASEPRODUCE,
    id,
  };
};

export const decreaseProduce = (id) => {
  return {
    type: DECREASEPRODUCE,
    id,
  };
};

export const numberProduce = (id, number = 1) => {
  return {
    type: NUMBERPRODUCE,
    id,
    number,
  };
};
function cartReducer(state = {}, action) {
  switch (action.type) {
    case EMPTYCART:
      return {};

    case ADDPRODUCE:
      const addId = action.id;
      const addObj = { ...state };
      addObj[addId] = { id: addId, count: 1 };
      return addObj;

    case REMOVEPRODUCE:
      const removeId = action.id;
      const removeObj = { ...state };
      delete removeObj[removeId];
      return removeObj;

    case INCREASEPRODUCE:
      const increaseId = action.id;
      const increaseObj = { ...state };
      increaseObj[increaseId].count++;
      return increaseObj;

    case DECREASEPRODUCE:
      const decreaseId = action.id;
      const decreaseObj = { ...state };
      if (decreaseObj[decreaseId].count > 1) decreaseObj[decreaseId].count--;
      return decreaseObj;

    case NUMBERPRODUCE:
      const numberId = action.id;
      const number = action.number;
      const numberObj = { ...state };
      numberObj[numberId].count = number;
      return numberObj;

    default:
      return state;
  }
}

export default cartReducer;
