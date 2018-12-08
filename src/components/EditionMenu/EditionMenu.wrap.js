import { connect } from "react-redux";
import EditionMenu from "./EditionMenu";
import {
  setTennisCourtSizeActionCreator,
  tennisCourtSizeSelector
} from "../../modules/club-edition";

const mapStateToProps = state => ({
  tennisCourtSize: tennisCourtSizeSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setTennisCourtSize: event =>
    dispatch(setTennisCourtSizeActionCreator(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditionMenu);
