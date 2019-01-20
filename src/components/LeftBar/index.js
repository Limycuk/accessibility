import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import connect from "./connect";
import View from "./view";
import { NAVIGATIONS } from "../../constants/app";

class LeftBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabledAnimation: false
    };

    this.onClose = this.onClose.bind(this);
    this.toggleDisableAnimation = this.toggleDisableAnimation.bind(this);
    this.toggleDeafMode = this.toggleDeafMode.bind(this);
  }

  onClose() {
    const { appActions } = this.props;

    appActions.toggleDrawer();
  }

  toggleDisableAnimation() {
    document.body.classList.toggle("no-animation");

    this.setState(prevState => ({
      isDisabledAnimation: !prevState.isDisabledAnimation
    }));
  }

  toggleDeafMode() {
    const { appActions } = this.props;

    appActions.toggleDeafMode();
  }

  render() {
    const { isOpenedMenu, location, isEnableDeafMode } = this.props;
    const { isDisabledAnimation } = this.state;

    const props = {
      onClose: this.onClose,
      toggleDisableAnimation: this.toggleDisableAnimation,
      toggleDeafMode: this.toggleDeafMode,
      isOpenedMenu,
      links: NAVIGATIONS,
      pathname: location.pathname,
      isDisabledAnimation,
      isEnableDeafMode
    };

    return <View {...props} />;
  }
}

LeftBarContainer.propTypes = {
  appActions: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired,
    toggleDeafMode: PropTypes.func.isRequired
  }).isRequired,
  isOpenedMenu: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(connect(LeftBarContainer));
