const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault(); 
    // event.stopPropagation();
    if ((this.state.username.length != 0) && (this.state.password.length != 0)) {
      this.props.onSubmit()
    }
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePassword} />
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
