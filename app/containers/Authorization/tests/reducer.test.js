import expect from 'expect';
import authorizationReducer from '../reducer';
import { fromJS } from 'immutable';

describe('authorizationReducer', () => {
  it('returns the initial state', () => {
    expect(authorizationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
