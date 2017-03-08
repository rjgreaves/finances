import { createSelector } from 'reselect';

/**
 * Direct selector to the authorization state domain
 */
const selectAuthorizationDomain = () => state => state.get('authorization');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Authorization
 */

const selectAuthorization = () => createSelector(
  selectAuthorizationDomain(),
  (substate) => substate.toJS()
);

export default selectAuthorization;
export {
  selectAuthorizationDomain,
};
