import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.username === "" || this.state.password === "") {
      console.log("You must enter valid values for username and password")
      return
    } else { this.props.onSubmit( this.state ) }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="test-username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="test-password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
