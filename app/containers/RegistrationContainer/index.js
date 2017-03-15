/*
 *
 * RegistrationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm';
import selectRegistrationContainer from './selectors';

export class RegistrationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <RegistrationForm { ...this.props } />
      </div>
    );
  }
}

const mapStateToProps = selectRegistrationContainer();

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
    cancelLogin: () => dispatch(cancelLogin()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
