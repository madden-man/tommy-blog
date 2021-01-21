import { takeEvery, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { passageRequested, passageReceived } from './actions';
import actionTypes from './actionTypes';
import BibleApi from './service';

export function* requestPassage(newSignature) {
  try {
    const response = yield BibleApi.fetch(newSignature);

    debugger;
    yield put(passageReceived(response.data.passages[0]));
  } catch (e) {
    console.log(e);
  }
}

export function* requestDefaultPassage() {
  yield put(passageRequested('Genesis 1'));
}

export function* watchForPassageRequest() {
  yield takeEvery(actionTypes.PASSAGE_REQUESTED,
    (action) => requestPassage(action.payload.newSignature));
}

export function* watchForBibleRoute() {
  yield takeEvery((action) => action.type === LOCATION_CHANGE
    && action.payload.location.pathname.includes('/bible'),
    requestDefaultPassage);
}

const sumSaga = [
  watchForBibleRoute,
  watchForPassageRequest,
];

export default sumSaga;
