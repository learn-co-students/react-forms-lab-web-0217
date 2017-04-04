const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      textValidation: false
    };
    this.storeText = this.storeText.bind(this)
    this.textValidation = this.textValidation.bind(this)
  }

  storeText(event) {
    return this.setState({
      text: event.target.value,
      textValidation: this.textValidation(event.target.value)
    })
  }

  textValidation(text) {
    let lineArray = text.split('\n')
    let sentenceArray = lineArray.map((sentence) => {return sentence.split(/\s/)})
    if (sentenceArray[0].filter(n=>n).length === 5
        && sentenceArray[1].filter(n=>n).length === 3
        && sentenceArray[2].filter(n=>n).length === 5
        && sentenceArray.length === 3) {
          return true
        } else {
          return false
        }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.storeText}/>
        {this.state.textValidation ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
