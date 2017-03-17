/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';
import IconButton from '../IconButton';
import styles from './styles.css';

function AppBar({ toggleDrawer, logout, user }) {
  const loginLink = user && user.isAuthenticated ? user.email : (<Link to="/login"> login </Link>);
  const logoutLink = user && user.isAuthenticated ? (<button onClick={logout}>logout</button>) : '';
  return (
    <div className={styles.appBar}>
      <IconButton
        icon="bars"
        buttonClass={styles.iconButton}
        iconClass={styles.icon}
        onClick={toggleDrawer}
      />
      <div
        className={styles.heading}
      >
        Coder daily
      </div>
      <div
        className={styles.linkContainer}
      >
        {loginLink}
        {logoutLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

export default AppBar;
