import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connect from './connect';
import View from './view';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { appActions } = this.props;

    appActions.toggleDrawer();
  }

  render() {
    const props = {
      toggleMenu: this.toggleMenu
    };

    return <View {...props} />;
  }
}

HeaderContainer.propTypes = {
  appActions: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired
  }).isRequired
};

export default connect(HeaderContainer);