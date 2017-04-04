const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      valid: false
    };

    this.updateText = this.updateText.bind(this)
  }

  updateText(event) {
    const content = event.target.value;

    if (content) {
      this.setState({
        content: content,
        valid: isValid(content)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.updateText} />
        {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValid(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

module.exports = PoemWriter;
