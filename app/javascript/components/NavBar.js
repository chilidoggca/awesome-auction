import React from 'react';
import {CurrentDateTime} from './CurrentDateTime';
import {Link} from 'react-router-dom';

function NavBar (props) {
  const {user, onSignOutClick = () => {}} = props;

  const handleSignOut = event => {
    event.preventDefault();
    onSignOutClick();
  };

  return (
    <nav
      className="navbar fixed-top"
      style={{
        padding: '10px',
        display: 'flex',
      }}
    >
      <Link style={{marginRight: '20px'}} to="/">&nbsp;Auction.&nbsp;</Link>
      <Link style={{marginRight: '20px'}} to="/auctions/new">New Auction</Link>
      <Link to="/auctions">Auctions</Link>
      {
        user ? ([
          <span
            key='1'
            style={{marginLeft: 'auto', marginRight: '20px'}}
          >
            Hello, {user.full_name}
          </span>,
          <a
            onClick={handleSignOut}
            key='2'
            href="#"
            style={{marginRight: '20px'}}
          >
            Sign Out
          </a>
        ]) : ([
          <Link
            style={{marginLeft: 'auto', marginRight: '20px'}}
            to="/sign_in"
            key='1'
          >
              Sign In
          </Link>,
          <Link
            style={{marginRight: '20px'}}
            to="/sign_up"
            key='2'
          >
              Sign Up
          </Link>
        ])
      }
      <CurrentDateTime />
    </nav>
  );
}

export {NavBar};
