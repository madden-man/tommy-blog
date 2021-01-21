import actionTypes from './actionTypes';

export const passageRequested = (newSignature) => ({
  type: actionTypes.PASSAGE_REQUESTED,
  payload: {
    newSignature,
  },
});

export const passageReceived = (newText) => ({
  type: actionTypes.PASSAGE_RECEIVED,
  payload: {
    newText,
  },
});

