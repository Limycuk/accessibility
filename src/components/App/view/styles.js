export default () => ({
  "@global": {
    "*": {
      boxSizing: "border-box"
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    },
    ".no-animation *": {
      transitionProperty: "none !important",
      animation: "none !important"
    }
  }
});
