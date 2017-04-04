const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charRemain: this.props.maxChars,
      value: "",
      tooLong: false
    };
    this.charCheck = this.charCheck.bind(this)
  }

  charCheck(event) {
    let value = event.target.value
    let remaining = this.props.maxChars - value.length
    if (remaining > 0) {
      return this.setState({
        charRemain: remaining,
        value: value
      })
    } else {
      return this.setState({
        tooLong: true
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.charCheck}/>
        <h2>remaining {this.state.tooLong ? "ERROR!!!!" : ''}</h2>
        <h2>{this.state.charRemain}</h2>
      </div>
    );
  }
}

module.exports = TwitterMessage;
