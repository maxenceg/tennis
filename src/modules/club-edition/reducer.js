import { actions } from "./actions";

export const initialState = {
  tennisCourtSize: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TENNIS_COURT_SIZE:
      return {
        ...state,
        tennisCourtSize: action.payload
      };
    default:
      return state;
  }
};
