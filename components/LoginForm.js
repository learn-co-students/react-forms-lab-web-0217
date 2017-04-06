import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitForm = this.submitForm.bind(this)
  }

  handleUsername(event){
    this.setState({
      username: event.target.value,
    })
  }

  handlePassword(event){
    this.setState({
      password: event.target.value,
    })
  }

  submitForm(event){
    event.preventDefault()
    if( (this.state.username.length > 0) && (this.state.password.length > 0)) {
        this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }


  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleUsername} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handlePassword} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
