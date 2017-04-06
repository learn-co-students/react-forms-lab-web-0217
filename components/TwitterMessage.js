import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  onChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.onChange.bind(this)} value={this.state.value}/>
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}
