const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();


    this.state = {
      username: '',
      password: ''
    }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  checkValidity(event) {
    event.preventDefault()
    if((this.state.username.length !== 0) && (this.state.password.length !== 0)) {
      this.props.onSubmit()
    }
  }

  updateUsername(event){
    this.setState({
      username: event.target.value,
    })
  }

  updatePassword(event){
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.checkValidity}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.updatePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
