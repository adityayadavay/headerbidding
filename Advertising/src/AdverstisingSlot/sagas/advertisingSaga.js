import { takeEvery, put, call } from "redux-saga/effects";
import * as AdvertisingActionTypes from "../constants";

export function* getAdvertisingListAsync() {
  try {
    const response = yield call(fetch, "http://localhost:5000/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = yield response.json();
    console.log("responseData = ", responseData);
    if (responseData.status === 200) {
      yield put({
        type: AdvertisingActionTypes.GET_ADVERTISING_LIST_SUCCESS,
        payload: responseData.data,
      });
    } else {
      yield put({
        type: AdvertisingActionTypes.GET_ADVERTISING_LIST_FAIL,
        payload: {
          status: responseData.status,
          message: responseData.message,
        },
      });
    }
  } catch (error) {
    yield put({
      type: AdvertisingActionTypes.GET_ADVERTISING_LIST_FAIL,
      payload: { status: error.status, message: error.message },
    });
  }
}

export default function* rootAdminReferralSaga() {
  yield takeEvery(
    AdvertisingActionTypes.GET_ADVERTISING_LIST_REQUEST,
    getAdvertisingListAsync
  );
}
