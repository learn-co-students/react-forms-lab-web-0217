const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: ''
    };
    this.loginChange = this.loginChange.bind(this)
    this.passChange = this.passChange.bind(this)
    this.submit = this.submit.bind(this)

  }
  loginChange(event) {
    this.setState({login: event.target.value})
  }
  passChange(event) {
    this.setState({password: event.target.value})
  }
  submit(event) {
    event.preventDefault()
    debugger
    if (this.state.login.length > 0 && this.state.password > 0) {
      this.props.onSubmit()
    }
  }


  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.loginChange} value={this.state.login} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.passChange} value={this.state.password} />
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
