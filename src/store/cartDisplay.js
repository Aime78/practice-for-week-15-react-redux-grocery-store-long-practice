const TOGGLECARTDISPLAY = "toggle/cartdisplay";
const SETINITIALVALUE = "toggle/setinitialvalue";

export const toggleDisplay = (currentValue) => {
  return {
    type: TOGGLECARTDISPLAY,
    currentValue,
  };
};

export const setInitialValue = () => {
  return {
    type: SETINITIALVALUE,
  };
};

function cartDisplayReducer(state = "", action) {
  switch (action.type) {
    case SETINITIALVALUE:
      let initialValue = false;
      return initialValue;
    case TOGGLECARTDISPLAY:
      let toggleValue = action.currentValue;
      console.log(toggleValue);
      return toggleValue;
    default:
      return state;
  }
}

export default cartDisplayReducer;
