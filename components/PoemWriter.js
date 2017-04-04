import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      showError: true
    };

    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    let lines = event.target.value.split("\n");
    let vlines = (lines.length === 3)
    let vfirst = false
    let vsecond = false
    let vthird = false
    if(lines.length === 3){
      vfirst = (lines[0].split(" ").filter(Boolean).length === 5)
      vsecond = (lines[1].split(" ").filter(Boolean).length === 3)
      vthird = (lines[2].split(" ").filter(Boolean).length === 5)
    }

    if(vlines && vfirst && vsecond & vthird){
      this.setState({
        value: event.target.value,
        showError: false
      })
    }else{
      this.setState({
        value: event.target.vlaue,
        showError: true
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.value} onChange={this.handleChange}/>
        {this.state.showError ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}
