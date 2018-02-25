import authReducer from './reducer'
import * as actionTypes from './actionTypes'

const initialState = {
	status: 'AWAITING_AUTH_RESPONSE',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null
}

const loggedOutState = {
	status: 'ANONYMOUS',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null
}

const loadingState = {
	status: 'AWAITING_AUTH_RESPONSE',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null
}

const user = {
	email: 'shaunoff@gmail.com',
	displayName: 'Shaun Hutch',
	photoURL: 'someUrl',
	uid: 'someRandomIndex'
}

const loggedInState = {
	status: 'SIGNED_IN',
  email: 'shaunoff@gmail.com',
  displayName: 'Shaun Hutch',
  photoURL: 'someUrl',
  uid: 'someRandomIndex'
}

describe('authReducer', ()=>{
	it('sets an authWaiting status', ()=>{
		expect(authReducer(initialState, {type: actionTypes.ATTEMPTING_LOGIN}))
			.toEqual(loadingState)
	})
	it('signs out a user', ()=>{
		expect(authReducer(loggedInState, {type: actionTypes.SIGNED_OUT}))
			.toEqual(loggedOutState)
	})
	it('signs a user in', ()=>{
		expect(authReducer(initialState, {type: actionTypes.SIGNED_IN, user}))
			.toEqual(loggedInState)
	})
	it('returns state', ()=>{
		expect(authReducer(initialState, {}))
			.toEqual(initialState)
		expect(authReducer(undefined, {}))
			.toEqual(initialState)
	})
})
