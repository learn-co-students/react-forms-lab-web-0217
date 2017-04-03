const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  onChange={this.handleChange} value={this.state.value} />
        <p>{this.props.maxChars - this.state.value.length}</p>
        <p>You have {this.props.maxChars} chars remaining</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

module.exports = TwitterMessage;
