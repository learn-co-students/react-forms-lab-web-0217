import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.inputChange=this.inputChange.bind(this)
    this.submitForm=this.submitForm.bind(this)
  }

  inputChange(field, event){
    this.setState({
      [field]: event.target.value
    })
  }

  submitForm(event){
    event.preventDefault()
    if((this.state.username.length > 0) && (this.state.password.length > 0)){
      this.props.onSubmit(this.state.username,this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" onChange={this.inputChange.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} type="password" onChange={this.inputChange.bind(this, 'password')} />
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
  onSubmit: React.PropTypes.func
}
