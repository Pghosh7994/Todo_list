import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "./../../Hooks/useFirebase";

const LogIn = () => {
  const { loginWithGoogle, user } = useFirebase();
  return (
    <div className="mt-5">
      {!user.displayName ? (
        <div className="mt-5">
          <h4 className="text-warning">
            <span className="text-danger">*** </span>
            Please sign in with Google account for view details information.{" "}
            <span className="text-danger">***</span>
          </h4>
          <Link to="/services">
            <button onClick={loginWithGoogle} className=" mt-5 btn-success p-3">
              Sign in With Google
            </button>
          </Link>
        </div>
      ) : (
        <h1>LogIn Successful ! welcome {user.displayName || user.email}</h1>
      )}
    </div>
  );
};

export default LogIn;
