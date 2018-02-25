import * as actions from './actions'
import * as actionTypes from './actionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {auth, googleAuthProvider} from '../../firebase'

const createMockStore = configureMockStore([thunk]);

describe('Synchronous App ActionCreators', ()=>{
	it('attemptLogin creates an action to attempt login', ()=>{
		const expectedAction = {type: actionTypes.ATTEMPTING_LOGIN}

		expect(actions.attemptLogin()).toEqual(expectedAction)
	})

	it('signedIn creates an action to set the user object', ()=>{
		const user = {uid: "ytuiryiueytu"}
		const expectedAction = {type: actionTypes.SIGNED_IN, user}

		expect(actions.signedIn(user)).toEqual(expectedAction)
	})

	it('signedOut creates an action to remove the user object', ()=>{
		const expectedAction = {type: actionTypes.SIGNED_OUT}

		expect(actions.signedOut()).toEqual(expectedAction)
	})
})

describe('Asynchronous App ActionCreators', ()=>{

	let store
	beforeEach(()=>{
		store = createMockStore({auth: {}})
	})

	it('signIn triggers the ATTEMPTING_LOGIN action and triggers GoogleAuth', ()=>{
		auth.signInWithRedirect = jest.fn()
		store.dispatch(actions.signIn())
		expect(auth.signInWithRedirect).toHaveBeenCalledTimes(1)
		expect(store.getActions()).toEqual([{type: actionTypes.ATTEMPTING_LOGIN}])
	})
	it('signOut triggers the ATTEMPTING_LOGOUT action and triggers auth.logOut', ()=>{
		auth.signOut = jest.fn()
		store.dispatch(actions.signOut())
		expect(auth.signOut).toBeCalled()
		expect(store.getActions()).toEqual([{type: actionTypes.ATTEMPTING_LOGIN}])
	})
	// describe('authListener', ()=>{
	// 	auth.onAuthStateChanged =jest.fn((user) => user ? store.dispatch(actions.signedIn(user)) : store.dispatch(actions.signedOut()))
	// 	actions.authChangesListener = jest.fn((user) => user ? auth.onAuthStateChanged(user) : auth.onAuthStateChanged())
	// 	it('user object present and triggers signedIn', ()=>{
	// 		const user = {uid: "ytuiryiueytu"}
	// 		const expectedAction = {type: actionTypes.SIGNED_IN, user}
	// 		actions.authChangesListener(user)
	// 		expect(store.getActions()).toEqual([expectedAction])
	// 	})
	// 	it('user object present and triggers signedOut', ()=>{
	// 		const expectedAction = {type: actionTypes.SIGNED_OUT}
	// 		actions.authChangesListener()
	// 		expect(store.getActions()).toEqual([expectedAction])
	// 	})
	// })
	it('user object present and triggers signedIn', async ()=>{
		const user = null
		const expectedAction = {type: actionTypes.SIGNED_OUT}
		actions.signedOut =jest.fn()
		auth.onAuthStateChanged =jest.fn(callback => callback(user))
		const result = await actions.authChangesListener()
		result(store.dispatch)
		expect(auth.onAuthStateChanged).toBeCalled()
		expect(store.getActions()).toEqual([expectedAction])
	})
	it('user object present and triggers signedOut', async ()=>{
		const user = {uid: 'dgfhdgfjhdgfjh'}
		const expectedAction = {type: actionTypes.SIGNED_IN, user}
		actions.signedIn = jest.fn()
		auth.onAuthStateChanged =jest.fn(callback => callback(user))
		const result = await actions.authChangesListener()
		result(store.dispatch)
		expect(auth.onAuthStateChanged).toBeCalled()
		expect(store.getActions()).toEqual([expectedAction])
	})
})
