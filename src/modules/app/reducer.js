import * as actions from './actionTypes';

const initialState = {
	status: 'AWAITING_AUTH_RESPONSE',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case actions.ATTEMPTING_LOGIN:
      return {...state, status: 'AWAITING_AUTH_RESPONSE'};
    case actions.SIGNED_OUT:
      return {...initialState, status: 'ANONYMOUS'}
    case actions.SIGNED_IN:
      return {
        status: 'SIGNED_IN',
        email: action.user.email,
        displayName: action.user.displayName,
        photoURL: action.user.photoURL,
        uid: action.user.uid
      };
    default:
      return state;
  }
}
