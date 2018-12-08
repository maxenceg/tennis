export const actions = {
  SET_TENNIS_COURT_SIZE: "SET_TENNIS_COURT_SIZE"
};

export const setTennisCourtSizeActionCreator = size => ({
  type: actions.SET_TENNIS_COURT_SIZE,
  payload: size
});
