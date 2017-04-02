const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      remChars: props.maxChars,
    };
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    this.setState({
      message: e.target.value,
      remChars: this.props.maxChars - e.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.remChars}</h3>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.updateInput}/>
      </div>
    );
  }
}

module.exports = TwitterMessage;
