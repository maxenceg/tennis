import { connect } from "react-redux";
import {
  tennisCourtSizeSelector,
  fetchClubs
} from "../../modules/club-edition";
import Club from "./Club";

const mapStateToProps = state => ({
  tennisCourtSize: tennisCourtSizeSelector(state)
});

const mapDispatchToProps = {
  fetchClubs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Club);
