import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.writePoem = this.writePoem.bind(this)
    this.state = {
      poem:"",
      isValid: false
    };
  }

  writePoem(event) {
    this.setState({
      poem:event.target.value,
      isValid:validPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.writePoem} />
        {this.state.isValid ?
          <div id="sweetPoemBro">FUCK YEAH NICE POEM BUKOWSKI</div> :
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      }
      </div>
    );
  }
}

function validPoem(poem) {
  const lines = poem.split("\n").filter(l => l)
  const numOfLines = 3
  const rightLines = lines.length === numOfLines
  if (rightLines) {
    const yeahBaby = (numOfWords(lines[0]) === 5) && (numOfWords(lines[1]) === 3) && (numOfWords(lines[2]) === 5)
    return yeahBaby && rightLines
  }
}

function numOfWords(line) {
  return line.split(" ").filter(l => l).length
}
