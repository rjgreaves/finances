import { createSelector } from 'reselect';

/**
 * Direct selector to the linkFormContainer state domain
 */
const selectLinkFormContainerDomain = () => state => state.get('linkFormContainer');

/**
 * Other specific selectors
 */
const selectRouteTopic = () => (state, props) =>
  props.params.topicId;

/**
 * Default selector used by LinkFormContainer
 */

const selectLinkFormContainer = () => createSelector(
  selectLinkFormContainerDomain(),
  selectRouteTopic(),
  (substate, topicId) => Object.assign(substate.toJS(), { topicId })
);

export default selectLinkFormContainer;
export {
  selectLinkFormContainerDomain,
};
