import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import App from '../components/App';
import { signIn, signOut } from '../actions';


const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({signIn,signOut}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
