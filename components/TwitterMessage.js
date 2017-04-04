const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };

        this.alterMessage = this.alterMessage.bind(this)

        }

      alterMessage(event){
        this.setState({
          message: event.target.value
        })
      }

  render() {
    return (
      <div>
      <strong>Your message:</strong>
      <input value={this.state.message} onChange={this.alterMessage} type="text" />
      <p>You have {this.props.maxChars - this.state.message.length} characters left</p>
      </div>
    );
  }
}


module.exports = TwitterMessage;
