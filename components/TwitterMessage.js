const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleInput}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

module.exports = TwitterMessage;
