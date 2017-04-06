import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!(this.state.username === "") && !(this.state.password === "")){
      this.props.onSubmit()
    }
  }

  handleUsername (event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword (event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} onChange={this.handleUsername} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.username} onChange={this.handlePassword} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
