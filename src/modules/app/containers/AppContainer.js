import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import App from '../components/App';
import { signIn, signOut } from '../actions';

export const AppContainer = (props) => (<App {...props}/>)

export const mapStateToProps = ({ auth }) => {
  return { auth };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({signIn,signOut}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
