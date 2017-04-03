const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
    this.updateText = this.updateText.bind(this)
    this.validatePoem = this.validatePoem.bind(this)
  }

  updateText(event){
    this.setState({
      value: event.target.value,
      isValid: this.validatePoem(event.target.value),
    })

  }

  validatePoem(poem) {
    var line1, line2, line3
    let lines = poem.split('\n')
    if(lines.length === 3){
      line1 = lines[0].trim().split(' ').length
      line2 = lines[1].trim().split(' ').length
      line3 = lines[2].trim().split(' ').length
    }
    if((lines.length === 3) && (line1 === 5) && (line2 === 3) && (line3 === 5)){
      return true
    }else{
      return false
    }
  }

  render() {
    let niky = <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.updateText} />
        {
          this.state.isValid ? null : niky
        }
      </div>
    );
  }
}

module.exports = PoemWriter;
