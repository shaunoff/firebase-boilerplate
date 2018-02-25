import React from 'react';

const App = ({auth, signIn, signOut }) => {
  if(auth.status === "AWAITING_AUTH_RESPONSE"){
    return <h2>Loading...</h2>
  }
  return (
      <div>
				<h2>{`Status: ${auth.status === "SIGNED_IN" ? "logged in" : "logged out"}`}</h2>
				{auth.status === "SIGNED_IN" ? <button onClick={signOut}>Sign Out</button> : <button onClick={signIn}>Sign In</button>}
      </div>
  );
};

export default App


// { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
// { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
// { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }
