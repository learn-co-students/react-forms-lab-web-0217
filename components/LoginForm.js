const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
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
            <input name="username" id="test-username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" id="test-password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
