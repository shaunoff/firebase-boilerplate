import * as testObject from './index.js'

describe('index object', ()=>{
	it('contains the correct keys', ()=>{
		expect(testObject.hasOwnProperty('AppContainer')).toEqual(true)
	})
})
