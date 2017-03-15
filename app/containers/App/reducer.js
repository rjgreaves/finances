/*
 *
 * LinkFormContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTHENTICATE_TOKEN,
} from './constants';

const initialState = fromJS({});

function appContainerReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_TOKEN:
      console.log("auth token found...");
      return state;
    default:
      return state;
  }
}

export default appContainerReducer;
