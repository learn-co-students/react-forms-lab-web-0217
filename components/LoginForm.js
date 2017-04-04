import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
    this.saveUsername = this.saveUsername.bind(this)
    this.savePassword = this.savePassword.bind(this)
    this.preSubmit = this.preSubmit.bind(this)
  }

  saveUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  savePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  preSubmit(event){
    event.preventDefault()
    if((this.state.username.length) !== 0 && (this.state.password.length !== 0)){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.preSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.saveUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.savePassword} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}
