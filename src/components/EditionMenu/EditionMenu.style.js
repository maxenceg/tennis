const styles = {
  menuContainer: {
    fontFamily: "Roboto",
    flex: 1,
    padding: 15
  },
  menuHeader: {
    borderBottom: "1px solid #eeeeee",
    padding: "0 5"
  },
  menuTitle: {
    fontSize: 18,
    marginBottom: 15
  },
  cardsContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "column"
  },
  slider: {
    WebkitAppearance: "none",
    width: "100%",
    height: 5,
    borderRadius: 5,
    background: "#d3d3d3",
    outline: "none",
    opacity: 0.7,
    WebkitTransition: ".2s",
    transition: "opacity .2s",
    marginBottom: 15
  }
};

export default styles;
