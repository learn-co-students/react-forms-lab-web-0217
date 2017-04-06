import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUserName(event){
    this.setState({
      username: event.target.value
    })
  }

  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleUserName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
