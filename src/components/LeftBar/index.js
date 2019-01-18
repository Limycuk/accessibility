import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import connect from "./connect";
import View from "./view";
import { NAVIGATIONS } from "../../constants/app";

class LeftBarContainer extends Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    const { appActions } = this.props;

    appActions.toggleDrawer();
  }

  render() {
    const { isOpenedMenu, location } = this.props;

    const props = {
      onClose: this.onClose,
      isOpenedMenu,
      links: NAVIGATIONS,
      pathname: location.pathname
    };

    return <View {...props} />;
  }
}

LeftBarContainer.propTypes = {
  appActions: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired
  }).isRequired,
  isOpenedMenu: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(connect(LeftBarContainer));
