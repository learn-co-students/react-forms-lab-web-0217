import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      showError: true
    };

    this.handlePoem=this.handlePoem.bind(this)
  }

  handlePoem(event){
    let lines = event.target.value.split("\n");
    let verifiedLines = (lines.length === 3)
    let verifiedFirst = false
    let verifiedSecond = false
    let verifiedThird = false
    //modify the verfiedLines variables to hold True
    if(lines.length === 3){
      verifiedFirst = (lines[0].split(" ").filter(Boolean).length === 5)
      verifiedSecond = (lines[1].split(" ").filter(Boolean).length === 3)
      verifiedThird =(lines[2].split(" ").filter(Boolean).length === 5)
    }

    if(verifiedFirst && verifiedSecond && verifiedThird){
      this.setState({
        value: event.target.value,
        showError: false
      })
    }else{
      this.setState({
        value: event.target.value,
        showError: true
      })
    }
  }


  render() {
    return (
      <div>

        <textarea rows="3" cols="60" onChange={this.handlePoem} value={this.state.value} />

        { this.state.showError ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}

      </div>
    );
  }
}
