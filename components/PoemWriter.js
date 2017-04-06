import React from 'react';


function wordCount(poem){
  return poem.split(" ").filter(l => l).length;
} 

function isValidPoem(poem){
    
    const lines = poem.split('\n').filter(l => l)

    const hasThreeLines = lines.length === 3
    const oneHasFive    = wordCount(lines[0]) === 5
    const twoHasThree   = wordCount(lines[1]) === 3
    const threeHasFive  = wordCount(lines[2]) === 5

    return hasThreeLines && oneHasFive && twoHasThree && threeHasFive
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this);   
  }


  setPoemContent(ev) {
    const content = ev.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content),
      });
    }
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.txt} onChange={this.setPoemContent}  />
        { !this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
