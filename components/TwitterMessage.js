const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      message: '',
    };
  }

  handleChange(event) {
    this.setState({
      message: event.target.value //you'll just take the value from the event handler.  you'll make a different function to count the characters and do the calculation.
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number, 
}

module.exports = TwitterMessage;
