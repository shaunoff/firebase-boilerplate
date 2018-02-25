import reducer from './reducers'
import {createStore } from 'redux';

const store = createStore(reducer)

describe('root reducer', ()=>{
	it('has an auth object in state', ()=>{
		expect(store.getState()).toHaveProperty('auth')
	})
})
