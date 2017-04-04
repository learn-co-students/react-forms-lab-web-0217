import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.hasError = this.hasError.bind(this)
    this.checkLength = this.checkLength.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  checkLength(string) {
    return string.trim().split(' ').length
  }

  hasError() {
    const lines = this.state.value.split('\n')
    if (this.checkLength(lines[0]) === 5 &&
        this.checkLength(lines[1]) === 3 &&
        this.checkLength(lines[2]) === 5) {
          return null
    } else {
      return (<div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>)
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.hasError()}
      </div>
    );
  }
}
