import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header>UnivChat</Header>
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Welcome to UnivChat</h1>
              <p className="lead">This Software is Optimized for Colleges and Universities to enhance control and privacy</p>
              <div className="mt-4">
                <Link className="btn btn-warning px-5 mr-3" to="/signup">Create New Account</Link>
                <Link className="btn btn-success px-5 mr-3" to="/login">Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
