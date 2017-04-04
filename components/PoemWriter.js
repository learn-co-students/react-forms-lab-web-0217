import React from 'react';

function lineLength(line) {
  return line.split(" ").filter(l => l).length
}

function validPoem(poem) {
  const lines = poem.split("\n").filter(l => l)
  const numberOfLines = lines.length === 3
  if (numberOfLines) {
    const numberOfWords = (lineLength(lines[0]) === 5) && (lineLength(lines[1]) === 3) && (lineLength(lines[2]) === 5)
    return numberOfWords && numberOfLines
  }
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: false
    };

    this.writePoem = this.writePoem.bind(this)
  }

  writePoem(event) {
    this.setState({
      poem: event.target.value,
      isValid: validPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.writePoem} />
        { !this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}
