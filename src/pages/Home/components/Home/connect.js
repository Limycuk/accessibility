import { connect } from 'react-redux';

import * as appSelectors from '~/selectors/app';

const mapStateToProps = (state) => {
  return {
    isEnableAccessibilityMode: appSelectors.getIsEnableAccessibilityMode(state)
  };
};

export default connect(mapStateToProps);
