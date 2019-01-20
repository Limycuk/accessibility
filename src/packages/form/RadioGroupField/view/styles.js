export default theme => ({
  container: {
    boxSizing: "border-box",
    marginTop: 20
  },
  group: {
    margin: `0`
  },
  error: {
    ...theme.error,
    bottom: -16
  }
});
