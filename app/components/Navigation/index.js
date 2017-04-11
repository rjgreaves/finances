/**
*
* Navigation
*
*/

import React from 'react';
import styles from './styles.css';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

function Navigation({ newsletters, selectNewsletter, toggleDrawer, isDrawerOpen, user, logout }) {
  return (
    <div className={styles.navigation}>
      <AppBar
        toggleDrawer={toggleDrawer}
        user={user}
        logout={logout}
      />
      <Drawer
        items={newsletters}
        selectItem={selectNewsletter}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  newsletters: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  selectNewsletter: React.PropTypes.func.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object,
  logout: React.PropTypes.func.isRequired,
};

export default Navigation;
