const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { textValue: "", passwordValue: "" };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTyping = this.handleTypingText.bind(this)
    this.handleTyping = this.handleTypingPassword.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    if (!!this.state.textValue && !!this.state.passwordValue) {
      this.props.onSubmit()
    }
  }

  handleTypingText(event){
    return this.setState({ textValue: event.target.value })
  }

  handleTypingPassword(event){
    return this.setState({ passwordValue: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.textValue} onChange={this.handleTypingText.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordValue} onChange={this.handleTypingPassword.bind(this)}/>
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
