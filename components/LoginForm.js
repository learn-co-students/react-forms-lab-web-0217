const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.changeUpName = this.changeUpName.bind(this)
    this.changeUpPassword = this.changeUpPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeUpName(event){
    this.setState({
      username: event.target.value
    })
  }

  changeUpPassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
      event.preventDefault();
      const username = this.state.username
      const password = this.state.password

      if (username == "" || password == "") {
        return;
      }

      this.props.onSubmit();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUpName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changeUpPassword} />
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
