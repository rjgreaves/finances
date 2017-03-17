/*
 *
 * RegistrationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {

} from './constants';

const initialState = fromJS({});

function registrationContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default registrationContainerReducer;
