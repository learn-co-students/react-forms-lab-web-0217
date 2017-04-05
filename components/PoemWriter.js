import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.checkPoem = this.checkPoem.bind(this)
    this.displayError = this.displayError.bind(this)
    this.state = {
      input: '',
      valid: false
    };
  }

  handleChange(event) {
    let input = event.target.value
    this.setState(
      { input: input },
      function () {
        this.checkPoem()
      }
    )
  }

  checkPoem() {
    let input = this.state.input
    let lines = input.split("\n").filter(l => l)
    if (lines.length == 3) {
      if (lines[0].split(" ").filter(l => l).length == 5 && lines[1].split(" ").filter(l => l).length == 3 && lines[2].split(" ").filter(l => l).length == 5) {
        this.setState({
          valid: true
        })
      } else {
        this.setState({
          valid: false
        })
      }
    } else {
      this.setState({
        valid: false
      })
    }
  }

  displayError() {
    if (!this.state.valid) {
      return <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.input} onChange={this.handleChange}/>
        {this.displayError()}
      </div>
    );
  }
}
