export default () => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  imageContainer: {
    textAlign: "center",
    paddingLeft: 50
  },
  title: {
    textAlign: "center"
  },
  logo: {
    maxHeight: 280,
    margin: 0
  },
  video: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "40px 0"
  },
  videoContainer: {
    width: 640,
    height: 360
  },
  "@media (max-width: 800px)": {
    videoContainer: {
      width: 320,
      height: 180
    }
  }
});
