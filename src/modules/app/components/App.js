import React from 'react';

const App = ({auth, signIn, signOut }) => {
  console.log(auth)
  return (
      <div className="Application--sidebar">
				Status: {auth.uid ? "logged In" : "logged out"}
				{auth.uid ? <button onClick={signOut}>sign Out</button> : <button onClick={signIn}>sign In</button>}
      </div>
  );
};

export default App


// { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
// { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
// { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }
