import { connect } from "react-redux";
import { tennisCourtSizeSelector } from "../../modules/club-edition";
import Club from "./Club";

const mapStateToProps = state => ({
  tennisCourtSize: tennisCourtSizeSelector(state)
});

export default connect(mapStateToProps)(Club);
