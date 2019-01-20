import { connect } from "react-redux";

import * as appSelectors from "~/selectors/app";

const mapStateToProps = state => {
  return {
    isReadableMode: appSelectors.getIsReadableMode(state)
  };
};

export default connect(mapStateToProps);
