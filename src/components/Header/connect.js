import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as appActions from "~/actions/app";
import * as appSelectors from "~/selectors/app";

const mapStateToProps = state => {
  return {
    isReadableMode: appSelectors.getIsReadableMode(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
