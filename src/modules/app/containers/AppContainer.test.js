import React from 'react'
import {shallow} from 'enzyme'
import {AppContainer} from './AppContainer'
import * as actionTypes from '../actionTypes';
import { mapStateToProps, mapDispatchToProps } from './AppContainer';


describe('AppContainer', () => {
  const mockSignIn = jest.fn()
  const mockSignOut = jest.fn()
  const props = {
    auth: {},
    signIn: mockSignIn,
    signOut: mockSignOut,
  }
  const appContainer = shallow(<AppContainer {...props}/>)

  it('has access to the auth prop', ()=>{
    expect(appContainer.props('auth')).toMatchObject({})
  })

  it('dispatches `signIn()` it recieves from props', ()=>{
    appContainer.props().signIn()
    expect(mockSignIn).toBeCalled()
  })

  it('dispatches `signOut()` it recieves from props', ()=>{
    appContainer.props().signOut()
    expect(mockSignOut).toBeCalled()
  })
});


describe('AppContainer mapStateToProps & mapDispatchToProps', () => {
    it('should show previous auth value', () => {
        const initialState = {
          auth: 'randomData'
        };
        expect(mapStateToProps(initialState).auth).toEqual('randomData');
    });

    it('mapDispatchToProps should be called', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch)
        expect(mapDispatchToProps(dispatch)).toHaveProperty('signIn')
        expect(mapDispatchToProps(dispatch)).toHaveProperty('signOut')
    });
});
