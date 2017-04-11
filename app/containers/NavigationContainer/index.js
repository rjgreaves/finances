/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestNewsletters, selectNewsletter, toggleDrawer, logout } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestNewsletters: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestNewsletters();
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestNewsletters: () => dispatch(requestNewsletters()),
    selectNewsletter: (newsletter) => dispatch(selectNewsletter(newsletter)),
    toggleDrawer: () => dispatch(toggleDrawer()),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
