import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appSelectors from '~/selectors/app';
import * as appActions from '~/actions/app';

const mapStateToProps = (state) => {
  return {
    isOpenedMenu: appSelectors.getIsOpenedMenu(state),
    isEnableAccessibilityMode: appSelectors.getIsEnableAccessibilityMode(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
