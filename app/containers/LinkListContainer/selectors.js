import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */

const selectRouteNewsletter = () => (state, props) =>
  props.params.newsletterId;

const selectNewsletter = () => createSelector(
  selectNavigationContainer(),
  selectRouteNewsletter(),
  (navigationState, routeNewsletterId) => {
    const selectedNewsletter = navigationState.newsletters.find(t => t.id === routeNewsletterId);
    return selectedNewsletter || {
      name: '',
      _id: '',
    };
  }
);

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectNewsletter(),
  (substate, newsletter) =>
    Object.assign(substate.toJS(), { newsletterId: newsletter.id, newsletterName: newsletter.name })
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
