import bibleSagas from 'views/Bible/state/sagas';
import { all, fork } from 'redux-saga/effects';

export default function* root() {
  yield all([
    ...bibleSagas,
  ].map(saga => fork(saga)));
};
