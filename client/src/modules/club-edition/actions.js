export const actions = {
  SET_TENNIS_COURT_SIZE: "SET_TENNIS_COURT_SIZE",
  FETCH_CLUBS: {
    REQUEST: "FETCH_CLUBS_REQUEST",
    SUCCESS: "FETCH_CLUBS_SUCCESS",
    ERROR: "FETCH_CLUBS_ERROR"
  }
};

export const setTennisCourtSizeActionCreator = size => ({
  type: actions.SET_TENNIS_COURT_SIZE,
  payload: size
});

export const fetchClubsRequestActionCreator = () => ({
  type: actions.FETCH_CLUBS.REQUEST
});

export const fetchClubsSuccessActionCreator = clubs => ({
  type: actions.FETCH_CLUBS.SUCCESS,
  payload: clubs
});

export const fetchClubsErrorActionCreator = error => ({
  type: actions.FETCH_CLUBS.ERROR,
  payload: error
});

export const fetchClubs = () => {
  return dispatch => {
    const request = new Request("https://localhost:8443/clubs", {
      method: "GET"
    });
    return fetch(request)
      .then(data => data.json())
      .then(clubs => {
        dispatch(fetchClubsSuccessActionCreator(clubs));
        return clubs;
      })
      .catch(error => {
        dispatch(fetchClubsErrorActionCreator(error));
      });
  };
};
