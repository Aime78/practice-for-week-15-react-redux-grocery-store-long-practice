const ADDPRODUCE = "produce/addproduce";

export const addProduce = (id) => {
  return {
    type: ADDPRODUCE,
    id,
  };
};

function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADDPRODUCE:
      const actionId = action.id;
      const newObj = { ...state };
      newObj[actionId] = { id: actionId, count: 1 };
      return newObj;
    default:
      return state;
  }
}

export default cartReducer;
