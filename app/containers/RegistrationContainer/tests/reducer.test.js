import expect from 'expect';
import registrationContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('registrationContainerReducer', () => {
  it('returns the initial state', () => {
    expect(registrationContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
