import * as C from "../constants";
const initialState = {
  advertisingList: [],
};

const advertisingReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.GET_ADVERTISING_LIST_SUCCESS:
      return {
        ...state,
        advertisingList: action.payload,
      };
    default:
      return state;
  }
};

export default advertisingReducer;
