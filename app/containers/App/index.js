/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import selectApp from './selectors';

import { getIdToken } from '../../localStorageManager';
import { authenticateToken as authenticateTokenAction, startLogin } from './actions';

import styles from './styles.css';

export class AppContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    authenticateToken: React.PropTypes.func.isRequired,
    startLogin: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    // Check for token and update application state if required
    const token = getIdToken();
    console.log(`token=${token}`);
    if (token === null) {
      this.props.startLogin();
    } else {
      console.log('Dispatching auth token request...');
      this.props.authenticateToken(token);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = selectApp();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    authenticateToken: (token) => dispatch(authenticateTokenAction(token)),
    startLogin: () => dispatch(startLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
