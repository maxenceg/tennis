import { Colors } from "../../constants/Colors/Colors";

const styles = {
  wholeCourt: {
    height: 390,
    width: 180,
    display: "grid",
    padding: 2,
    gridGap: 2,
    gridTemplateColumns: "auto 37.5% 37.5% auto",
    backgroundColor: "white"
  },
  northAlley: {
    gridRowStart: 1,
    gridRowEnd: 3,
    backgroundColor: Colors.TENNIS_COURT_BLUE
  },
  northBackPart: {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 2,
    gridColumnEnd: 4,
    backgroundColor: Colors.TENNIS_COURT_BLUE
  },
  serviceBox: {
    backgroundColor: Colors.TENNIS_COURT_BLUE
  },
  southWestAlley: {
    gridRowStart: 3,
    gridRowEnd: 5,
    backgroundColor: Colors.TENNIS_COURT_BLUE
  },
  southBackPart: {
    gridColumnStart: 2,
    gridColumnEnd: 4,
    backgroundColor: Colors.TENNIS_COURT_BLUE
  },
  southEastAlley: {
    gridColumnStart: 4,
    gridColumnEnd: 5,
    gridRowStart: 3,
    gridRowEnd: 5,
    backgroundColor: Colors.TENNIS_COURT_BLUE
  }
};

export default styles;
