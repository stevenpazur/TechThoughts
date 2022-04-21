import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-info text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Tech Thoughts</h1>
        </Link>
        <p className="m-0">Made by Steven Pazur</p>
        {/* <Link className="text-light bg-danger p-2" style={{ borderRadius : 10, lineHeight : 10, padding: 20 }} to="/Loginpage">
          <h4 className="m-0">Log In</h4>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
