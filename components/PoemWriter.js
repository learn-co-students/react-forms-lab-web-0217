import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: false
    };
    this.handlePoem = this.handlePoem.bind(this)
  }

  handlePoem(event){
    this.setState({
      poem: event.target.value,
      isValid: this.poemValidation(event.target.value)
    })
  }



  poemValidation (change){
    debugger
    let rowArray = change.split('\n')
    if (rowArray.length != 3){
      return false
    }
    else if (rowArray.length === 3) {
      let checkRow0 = rowArray[0].trim().split(" ").length === 5
      let checkRow1 = rowArray[1].trim().split(" ").length === 3
      let checkRow2 = rowArray[2].trim().split(" ").length === 5
      if (!(checkRow0 && checkRow1 && checkRow2)){
        return false
      } else {
        return true
      }
    }
  }

  render() {
    return (
      <div>
        <textarea value={this.state.poem} onChange={this.handlePoem} rows="3" cols="60" />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>

    );
  }
}
