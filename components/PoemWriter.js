import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}
function poemValidator(poem){
   let lines = poem.split('\n').filter(l => l)
   let validLines = (lines.length === 3)
   let validWords = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5
   return validLines && validWords
}


export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false,
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const content = event.target.value
    if (content) {
      this.setState({
        content: content,
        valid: poemValidator(content),
      })
    }      
    
   
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange}/>
        {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
