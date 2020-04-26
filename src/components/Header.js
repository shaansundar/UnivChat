import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-info">
        <img src='vitlogo.png' width="150" height="50"/>
		<Link className="navbar-brand px-3" to="/">UnivChat</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
		
		<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              
              <button className="btn btn-danger mr-100" onClick={() => auth().signOut()}>Logout</button>
            </div>
            : <div className="navbar-nav">
				
              <Link className="btn btn-success mr-2" to="/login">Sign In</Link>
              <Link className="btn btn-warning mr-3" to="/signup">Sign Up</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;