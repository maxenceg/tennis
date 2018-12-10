import { combineReducers } from "redux";

import clubEditionReducer, {
  initialState as clubEditionState
} from "./club-edition";

// Combine all reducers you may have here
export default combineReducers({
  clubEditionState: clubEditionReducer
});

export const initialStates = {
  clubEditionState
};
