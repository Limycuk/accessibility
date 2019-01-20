import React, { Component } from "react";
import PropTypes from "prop-types";

import connect from "./connect";
import View from "./view";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleReadableMode = this.toggleReadableMode.bind(this);
  }

  toggleMenu() {
    const { appActions } = this.props;

    appActions.toggleDrawer();
  }

  toggleReadableMode() {
    const { appActions, isReadableMode } = this.props;

    if (isReadableMode) {
      document.documentElement.style.fontSize = "16px";
      document.documentElement.style.lineHeight = "normal";
    } else {
      document.documentElement.style.fontSize = "30px";
      document.documentElement.style.lineHeight = "44px";
    }

    appActions.toggleReadableMode();
  }

  render() {
    const { location, isReadableMode } = this.props;
    const title = location.pathname.split("/")[1];

    const hasLink = Boolean(title);

    const props = {
      toggleMenu: this.toggleMenu,
      toggleReadableMode: this.toggleReadableMode,
      hasLink,
      title,
      isReadableMode
    };

    return <View {...props} />;
  }
}

HeaderContainer.propTypes = {
  isReadableMode: PropTypes.bool.isRequired,
  appActions: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired,
    toggleReadableMode: PropTypes.func.isRequired
  }).isRequired
};

export default connect(HeaderContainer);
