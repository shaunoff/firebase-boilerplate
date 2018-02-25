import React from 'react';
import {shallow} from 'enzyme'

import SignUp from './SignUp'

describe('SignUp Component', () => {
	const signUp = shallow(<SignUp />);
	it('contains the correct input elements', ()=>{
		expect(signUp.find({ name: 'firstName'}).exists()).toBe(true)
		expect(signUp.find({ name: 'lastName'}).exists()).toBe(true)
		expect(signUp.find({ name: 'email'}).exists()).toBe(true)
		expect(signUp.find({ name: 'password'}).exists()).toBe(true)
	})
	it('contains a submit button', ()=>{
		expect(signUp.find('button').exists()).toBe(true)
		expect(signUp.find('button').text()).toEqual('Submit')
	})
	it('app initializes with the correct state', ()=>{
		expect(signUp.state()).toMatchObject({
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		})
	})
	it('changes to an input are reflected in state', ()=>{
		const spy = jest.spyOn(signUp.instance(), 'handleChange');
		signUp.find({ name: 'firstName'}).simulate('change', {target: {value: 'My new value'}})
		signUp.find({ name: 'lastName'}).simulate('change', {target: {value: 'last name'}})
		signUp.find({ name: 'email'}).simulate('change', {target: {value: 'email'}})
		signUp.find({ name: 'password'}).simulate('change', {target: {value: 'password'}})
		expect(signUp.state().firstName).toEqual('My new value')
		expect(signUp.state().lastName).toEqual('last name')
		expect(signUp.state().email).toEqual('email')
		expect(signUp.state().password).toEqual('password')
		expect(spy).toHaveBeenCalledTimes(4);
	})
	it('handleSubmit is triggered when button is clicked', ()=>{
		const spy = jest.spyOn(signUp.instance(), 'handleSubmit');
		signUp.find('button').simulate('click')
		expect(spy).toHaveBeenCalledTimes(1);
	})
})

//expect(appLoggedOut.find('h2').text()).toEqual('Status: logged out')
