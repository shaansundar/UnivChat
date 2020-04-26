import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
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
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
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
      console.log(error)
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <Header></Header>
		  <h1>
            Sign Up to
          <Link className="title ml-2" to="/">UnivChat</Link>
          </h1>
          <p className="lead">Create an account using VIT Email or contact CTS for Help</p>
          <div className="form-group">
            <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
          </div>
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button className="btn btn-warning px-5" type="submit">Sign up</button>
          </div>
          <p>You can also sign up with Google services</p>
          <button className="btn btn-danger mr-2" type="button">
            G+
          </button>
		  <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Sign up with Google
          </button>
          <hr></hr>
          <p>Already have an account? <Link to="/login">Login</Link></p>
		  <Footer></Footer>
        </form>
      </div>
    )
  }
}
