import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {poem: "", valid: false};
    // this.state = {poem: ""};
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      valid: this.isValid(e.target.value)
    })
  }

  isValid(poem) {
    let lines = poem.split(`\n`).map( line => line.trim().split(' ') )
    return lines.length === 3 && lines[0].length === 5 && lines[1].length === 3 && lines[2].length === 5
  }

  validate() {
    if (this.isValid(this.state.poem)) {
      return <div id="valid">How very poetic!</div>
    } else {
      return <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} name="poem" rows="3" cols="60" />
        {this.state.valid ? <div id="valid">How very poetic!</div> : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
        {/* {this.validate()} */}
      </div>
    );
  }
}
