import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.state = {
      username:"",
      password:""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let username = this.state.username
    let password = this.state.password

    if (username === "" || password === "" ){
      alert("fuck you try again")
      return false
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  changeUsername(event) {
    this.setState({
      username:event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      password:event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit:React.PropTypes.func.isRequired
}
