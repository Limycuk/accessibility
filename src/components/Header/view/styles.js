export default () => ({
  logo: {
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  button: {
    marginLeft: "auto"
  },
  title: {
    textTransform: "capitalize",
    "&:before": {
      content: "'>'",
      fontSize: 20,
      fontWeight: "bold",
      padding: "0 10px"
    }
  }
});
