import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  validLine(line, index){
    let wordCount = line.split(" ").filter((word) => word!=='').length
    return index % 2 === 0 ? wordCount === 3: wordCount === 5
  }

  validPoem(poem){
    return poem.split('\n').filter((line, index) => this.validLine(line, index+1)).length === 3
  }

  handleChange(event){
    this.setState({
      poem: event.target.value
    })
  }

  poemError(){
    if(!this.validPoem(this.state.poem)){
        return(<div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>)
    }else{
      return(<p>Not bad</p>)
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange.bind(this)}/>
        {this.poemError()}
      </div>
    );
  }
}
