export default theme => ({
  container: {
    boxSizing: "border-box",
    marginTop: 8
  },
  select: {
    padding: "2px 32px 2px 0",
    height: 28
  },
  error: {
    ...theme.error,
    bottom: -16
  }
});
