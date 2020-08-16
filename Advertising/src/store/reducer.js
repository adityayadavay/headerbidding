import { combineReducers } from "redux";
import AdvertisingReducer from "../AdverstisingSlot/reducers/advertisingReducer";

export default combineReducers({
  adslist: AdvertisingReducer,
});
