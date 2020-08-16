import { call, all } from "redux-saga/effects";
import advertisingSaga from "../AdverstisingSlot/sagas/advertisingSaga";

export default function* rootSaga() {
  yield all([call(advertisingSaga)]);
}
