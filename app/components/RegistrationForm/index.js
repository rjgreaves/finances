/**
*
* RegistrationForm
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import TextInput from '../TextInput';

class RegistrationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    register: React.PropTypes.func.isRequired,
    cancelRegister: React.PropTypes.func.isRequired,
    registrationError: React.PropTypes.string,
  }

  state = {};

  register = () => {
    let validationFailed = false;
    const email = this.emailField.value();
    const password = this.passwordField.value();
    const passwordConfirmation = this.passwordConfirmationField.value();

    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      validationFailed = true;
    } else {
      this.setState({
        errorText: null,
      });
    }

    if (!password) {
      this.setState({
        passwordErrorText: 'Please provide a password',
      });
      validationFailed = true;
    } else {
      this.setState({
        passwordErrorText: null,
      });
    }

    if (!passwordConfirmation) {
      this.setState({
        passwordConfirmationErrorText: 'Please provide a password confirmation',
      });
      validationFailed = true;
    } else {
      this.setState({
        passwordConfirmationErrorText: null,
      });
    }

    if (!validationFailed) {
      this.props.register(email, password);
    }
  }
  render() {
    let serverError = null;
    if (this.props.registrationError) {
      serverError = <div className={styles.errorMessage}>{this.props.registrationError}</div>;
    }

    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Register with your email
        </div>
        <TextInput
          placeholder="Your email"
          ref={(f) => { this.emailField = f; }}
          errorText={this.state.errorText}
          type="text"
        />

        <TextInput
          placeholder="Password"
          ref={(f) => { this.passwordField = f; }}
          errorText={this.state.passwordErrorText}
          type="password"
        />

        <TextInput
          placeholder="Password Confirmation"
          ref={(f) => { this.passwordConfirmationField = f; }}
          errorText={this.state.passwordConfirmationErrorText}
          type="password"
        />

        {serverError}

        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelRegister}
          >
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.register}
          >
            register
          </div>
        </div>
      </div>
    );
  }

}

export default RegistrationForm;
