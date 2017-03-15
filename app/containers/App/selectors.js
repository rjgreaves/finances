import { createSelector } from 'reselect';

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

/**
 * Direct selector to the authorization state domain
 */
const selectAppDomain = () => state => state.get('AppContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Authorization
 */

const selectApp = () => createSelector(
  selectAppDomain(),
  (substate) => substate ? substate.toJS() : {}
);

export default selectApp;
export {
  selectLocationState,
  selectAppDomain,
};
