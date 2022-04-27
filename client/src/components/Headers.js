import './HeaderStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const renderLinks = (auth) => {
    if (auth) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };
  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks(auth)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, null)(Header);
