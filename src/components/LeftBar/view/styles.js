export default () => ({
  container: {
    flexShrink: 0,
    width: 240
  },
  logoContainer: {
    minHeight: 64,
    paddingLeft: 24,
    display: "flex",
    alignItems: "center"
  },
  logo: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: 0.15,
    color: "rgba(0, 0, 0, 0.54)",
    textDecoration: "none",
    textTransform: "capitalize",
    "&:hover": {
      color: "#2196f3",
      textDecoration: "underline",
      backgroundColor: "transparent"
    }
  },
  hr: {
    height: 1,
    margin: 0,
    border: "none",
    flexShrink: 0,
    backgroundColor: "rgba(0, 0, 0, 0.12)"
  },
  list: {
    margin: 0,
    padding: "8px 0",
    position: "relative",
    listStyle: "none"
  },
  link: {
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 24,
    paddingRight: 8,
    textAlign: "left",
    justifyContent: "flex-start"
  },
  activeLink: {
    color: "#2196f3"
  }
});
