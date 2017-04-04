import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.countChars = this.countChars.bind(this);

    this.state = {
      tweet: ""
    };
  }

    countChars(event) {
      this.setState({
        tweet: event.target.value
      });
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.countChars}/>
        <p>You have {this.props.maxChars - this.state.tweet.length} characters remaining.</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number.isRequired
}

TwitterMessage.defaultProps = {
  maxChars: 140
}
