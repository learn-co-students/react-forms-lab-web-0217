const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.default = this.default.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.passwordChange = this.passwordChange.bind(this)
    // this.onSubmit = props.onSubmit.bind(this)
  }

  default(event) {
    event.preventDefault()


    if (this.state.username && this.state.password) {
      return this.props.onSubmit(this.state)
    } else {
      return alert("no")
    }
  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.default}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.handleInputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
