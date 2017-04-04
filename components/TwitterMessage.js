import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      length: 0,
      value: '',
    };
    this.wordsLeft = this.wordsLeft.bind(this)
    this.changeLength = this.changeLength.bind(this)
  }

  changeLength(event){
    this.setState({
      value: event.target.value,
      length: this.state.length += 1,
    })
  }

  wordsLeft() {
    return this.props.maxChars - this.state.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeLength} />
        <p>{this.wordsLeft()} words left</p>
      </div>
    );
  }
}
