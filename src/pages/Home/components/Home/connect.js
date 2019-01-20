import { connect } from "react-redux";

import * as appSelectors from "~/selectors/app";

const mapStateToProps = state => {
  return {
    isEnableDeafMode: appSelectors.getIsEnableDeafMode(state)
  };
};

export default connect(mapStateToProps);
