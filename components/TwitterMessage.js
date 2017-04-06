import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    // console.log(event.target.value)
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.props.maxChars - this.state.value.length}</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}
