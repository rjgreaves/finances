/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import TextInput from '../TextInput';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
    loginError: React.PropTypes.string,
  }

  state = {};

  login = () => {
    let validationFailed = false;
    const email = this.emailField.value();
    const password = this.passwordField.value();

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

    if (!validationFailed) {
      this.props.login(email, password);
    }
  }
  render() {
    let serverError = null;
    if (this.props.loginError) {
      serverError = <div className={styles.errorMessage}>{this.props.loginError}</div>;
    }

    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
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

        {serverError}

        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.login}
          >
            login
          </div>
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  loginError: React.PropTypes.string,
};

export default Login;
