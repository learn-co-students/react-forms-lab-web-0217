const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { currentCharacters: 0, value: ""};

    this.typingHandler = this.typingHandler.bind(this)
  }

  typingHandler(event){
    this.setState({ value: event.target.value, currentCharacters: event.target.value.length })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.typingHandler}/>
        <br/>
        Remaining Characters: {this.props.maxChars - this.state.currentCharacters}
        <br/>
        Max Characters: {this.props.maxChars}
      </div>
    );
  }
}

module.exports = TwitterMessage;
