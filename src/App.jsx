import React from "react";
import "./index.css";
import HomePage from "./Components/HomePage";
import LoginSign from "./Components/LoginSign";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

const App = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {loading ? (
        <div className="h-screen text-center text-4xl">Loading...</div>
      ) : null}
      {user ? <HomePage /> : <LoginSign />}
      <div className="h-screen w-screen flex">
        {/* <UserSec/>
        <MessageSec/> */}
      </div>
      {/* <LoginSign/> */}
    </>
  );
};

export default App;
