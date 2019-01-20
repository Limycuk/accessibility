export default () => ({
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  row: {
    width: '100%'
  },
  halfRow: {
    width: '48%'
  },
  '@media (max-width: 550px)': {
    halfRow: {
      width: '100%'
    }
  }
});
