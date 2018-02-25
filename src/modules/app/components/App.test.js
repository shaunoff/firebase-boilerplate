import React from 'react';
import {shallow} from 'enzyme'

import App from './App'

const loggedOut = {
	status: 'ANONYMOUS'
}
const loggedIn = {
	status: 'SIGNED_IN'
}
const loading = {
	status: 'AWAITING_AUTH_RESPONSE'
}

const appLoggedIn = shallow(<App auth={loggedIn}/>);
const appLoggedOut = shallow(<App auth={loggedOut}/>);
const appLoading = shallow(<App auth={loading}/>);

describe('App Component', ()=>{
	it('Renders Loading State correctly', ()=>{
		expect(appLoading.find('h2').text()).toEqual('Loading...')
	})
	it('Renders Logged Out Status correctly', ()=>{
		expect(appLoggedOut.find('h2').text()).toEqual('Status: logged out')
		expect(appLoggedOut.find('button').text()).toEqual('Sign In')
	})
	it('Renders Logged In Status correctly', ()=>{
		expect(appLoggedIn.find('h2').text()).toEqual('Status: logged in')
		expect(appLoggedIn.find('button').text()).toEqual('Sign Out')
	})
	it('Renders Logged In App', ()=>{
		expect(appLoggedIn).toMatchSnapshot()
	})
	it('Renders Logged Out App', ()=>{
		expect(appLoggedOut).toMatchSnapshot()
	})
})
