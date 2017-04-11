import { createSelector } from 'reselect';

/**
 * Direct selector to the newsletterListContainer state domain
 */
const selectNewsletterListContainerDomain = () => state => state.get('newsletterListContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsletterListContainer
 */

const selectNewsletterListContainer = () => createSelector(
  selectNewsletterListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectNewsletterListContainer;
export {
  selectNewsletterListContainerDomain,
};
