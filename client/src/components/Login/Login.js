import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h3>Hacking into the mainframe...</h3>

      <form
        className="flex-row justify-center justify-space-between-md align-center"
      >
        <div className="col-12">
          <input
            name="thoughtText"
            placeholder="Username"
            className="form-input w-100"
          ></input>
        </div>
        <div className="col-12">
          <input
            name="thoughtAuthor"
            placeholder="Password"
            className="form-input w-100"
            type="password"
          />
        </div>
        <div className="w-20 mx-auto">
          <Link to="/">
            <h4 className="m-0">Log In</h4>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
