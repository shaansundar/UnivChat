import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import Header from '../components/Header';
import Footer from '../components/Footer';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container">
        <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
		<Header>UnivChat</Header>
		
          <h1>
            Login to
            <Link className="title ml-2" to="/">
              UnivChat
            </Link>
          </h1>
          <p className="lead">
            Enter your VIT student mail ID to Continue ( if already registered)
          </p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="VIT/VTOP Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div className="form-group">
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
            <button className="btn btn-success px-5" type="submit">Login</button>
          </div>
          <p>You can also log in with Google services</p>
          <button className="btn btn-danger mr-2" type="logo">
            G+
          </button>
		  <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Sign in with Google
          </button>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
		<Footer></Footer>
		
      </div>
    );
  }
}
