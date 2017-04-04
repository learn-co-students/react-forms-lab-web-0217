const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    };
    this.input = this.input.bind(this)
  }
  input(event) {
    this.setState ({ value: event.target.value})
  }


  render() {
    return (
      <div>
        <strong >Your message:</strong>
        <input type="text" onChange={this.input} value={this.state.value} />
        <p>You have {this.props.maxChars - this.state.value.length} chars remaining</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
