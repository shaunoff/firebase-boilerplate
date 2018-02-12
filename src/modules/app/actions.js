import * as actions from './actionTypes';
import {auth, googleAuthProvider} from '../../firebase'


export const attemptLogin = () => ({type: actions.ATTEMPTING_LOGIN})
export const signedIn = user => ({type: actions.SIGNED_IN, user})
export const signedOut = () => ({type: actions.SIGNED_OUT})

export const signIn = () => {
	return (dispatch) => {
		dispatch(attemptLogin())
		auth.signInWithRedirect(googleAuthProvider)
	}
}

export const signOut = () => {
	return (dispatch) => {
		dispatch(attemptLogin())
		auth.signOut()
	}
}

export const authChangesListener = () => {
	return (dispatch) => {
		auth.onAuthStateChanged((user) => {
			console.log(user)
			if(user){
				dispatch(signedIn(user))
			}
			else {
				dispatch(signedOut())
			}
		})
	}
}

// export const signIn = () => {
//   return {
//     type: 'SIGN_IN',
//     email: 'bill@example.com',
//     displayName: 'Bill Murray',
//     photoURL: 'http://www.fillmurray.com/200/200',
//     uid: 'firstUser'
//   };
// };

// export const signOut = () => {
//   return {
//     type: 'SIGN_OUT'
//   };
// };
