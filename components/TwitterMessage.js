import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    };
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>You have {this.props.maxChars - this.state.value.length} remaining characters.</p>
      </div>
    );
  }
}
