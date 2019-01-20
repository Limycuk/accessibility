export default (theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    margin: '0 auto'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
