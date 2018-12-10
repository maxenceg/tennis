import { actions } from "./actions";

export const initialState = {
  tennisCourtSize: 5,
  clubs: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TENNIS_COURT_SIZE:
      return {
        ...state,
        tennisCourtSize: action.payload
      };
    case actions.FETCH_CLUBS.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actions.FETCH_CLUBS.SUCCESS:
      return {
        ...state,
        clubs: action.payload,
        isLoading: false
      };
    case actions.FETCH_CLUBS.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
