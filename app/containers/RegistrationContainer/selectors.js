import { createSelector } from 'reselect';

/**
 * Direct selector to the registrationContainer state domain
 */
const selectRegistrationContainerDomain = () => state => state.get('registrationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegistrationContainer
 */

const selectRegistrationContainer = () => createSelector(
  selectRegistrationContainerDomain(),
  (substate) => (substate ? substate.toJS() : {})
);

export default selectRegistrationContainer;
export {
  selectRegistrationContainerDomain,
};
