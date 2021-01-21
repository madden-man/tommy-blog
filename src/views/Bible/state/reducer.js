import actionTypes from './actionTypes';

const initialState = {
  currentSignature: '',
  currentText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASSAGE_REQUESTED:
      return {
        ...state,
        currentSignature: action.payload.newSignature,
      }
    case actionTypes.PASSAGE_RECEIVED:
      return {
        ...state,
        currentText: action.payload.newText,
      };
    default:
      return state;
  }
}