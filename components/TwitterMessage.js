const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)
    this.remChars = this.remChars.bind(this)

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  remChars() {
    return this.props.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Remaining Characters: {this.remChars()}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
