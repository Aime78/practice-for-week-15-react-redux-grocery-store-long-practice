import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const TOGGLELIKE = "produce/togglelike";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const toggleLike = (id) => {
  return {
    type: TOGGLELIKE,
    id,
  };
};

function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });

      return newState;

    case TOGGLELIKE:
      const togglelikeId = action.id;
      const toggleObj = { ...state };
      const toggleLike = toggleObj[togglelikeId];
      toggleObj[togglelikeId].liked = !toggleLike.liked;
      return toggleObj;
    default:
      return state;
  }
}

produceReducer({}, populateProduce());

export default produceReducer;
