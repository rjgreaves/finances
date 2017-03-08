import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */

const selectRouteTopic = () => (state, props) =>
  props.params.topicId;

const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicId) => {
    const selectedTopic = navigationState.topics.find(t => t._id === routeTopicId);
    return selectedTopic || {
      name: '',
      _id: ''
    };
  }
);

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectTopic(),
  (substate, topic) => 
    Object.assign(substate.toJS(), { topicId: topic._id, topicName: topic.name })
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};