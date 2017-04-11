import expect from 'expect';
import newsletterListContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('newsletterListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(newsletterListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
