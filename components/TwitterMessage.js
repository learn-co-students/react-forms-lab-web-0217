import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {tweet: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (this.props.maxChars - e.target.value.length < 0) return
    this.setState({
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.tweet} type="text" />
        <p>Characters remaining: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}
