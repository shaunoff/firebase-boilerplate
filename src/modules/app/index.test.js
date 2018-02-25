import testObject from './index.js'

describe('App Module index object', ()=>{
	it('contains the correct keys', ()=>{
		expect(testObject.hasOwnProperty('actions')).toEqual(true)
		expect(testObject.hasOwnProperty('components')).toEqual(true)
		expect(testObject.hasOwnProperty('constants')).toEqual(true)
		expect(testObject.hasOwnProperty('reducer')).toEqual(true)
		expect(testObject.hasOwnProperty('containers')).toEqual(true)
	})
})
