import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '~/actions/app';

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
);
