import { createSelector } from 'reselect';

/**
 * Direct selector to the linkFormContainer state domain
 */
const selectLinkFormContainerDomain = () => state => state.get('linkFormContainer');

/**
 * Other specific selectors
 */
const selectRouteNewsletter = () => (state, props) =>
  props.params.newsletterId;

/**
 * Default selector used by LinkFormContainer
 */

const selectLinkFormContainer = () => createSelector(
  selectLinkFormContainerDomain(),
  selectRouteNewsletter(),
  (substate, newsletterId) => Object.assign(substate.toJS(), { newsletterId })
);

export default selectLinkFormContainer;
export {
  selectLinkFormContainerDomain,
};
