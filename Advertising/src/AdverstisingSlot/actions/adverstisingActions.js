import * as C from "../constants";

export function getAdvertisingList() {
  console.log("In here");
  return {
    type: C.GET_ADVERTISING_LIST_REQUEST,
  };
}
