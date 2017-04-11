/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCEEDED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
  // LOGOUT,
  LOGOUT_SUCCESSFUL,
} from './constants';
import {
  LOGIN_SUCCESSFUL,
} from '../LoginContainer/constants';
import { User } from '../../models/user';

const initialState = fromJS({
  newsletters: [],
  isDrawerOpen: false,
  user: new User(),
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCEEDED:
      return state.set('newsletters', action.newsletters);
    case '@@router/LOCATION_CHANGE':
      return state.set('routerLocation', action.payload.pathname);
    case SELECT_TOPIC:
      return state.set('selectedNewsletter', action.newsletter).set('isDrawerOpen', false);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    case LOGIN_SUCCESSFUL: {
      const user = new User();
      user.loggedIn(action.email);
      return state.set('user', user);
    }
    case LOGOUT_SUCCESSFUL:
      return state.set('user', new User());
    default:
      return state;
  }
}

export default navigationContainerReducer;
