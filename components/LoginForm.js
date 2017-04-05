import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      username: '',
      password: ''
    };
  }
  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      return;
    }
    this.props.onSubmit({
      username,
      password
    });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <p>not secure lol pw is: {this.state.password}</p>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
