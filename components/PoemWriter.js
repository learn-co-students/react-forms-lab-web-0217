const React = require('react');

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '',
                  valid: false};
    this.typing = this.typing.bind(this)
    this.validatePoem = this.validatePoem.bind(this)
  }
  typing(event) {
    if (event.target.value) {
      this.setState({value: event.target.value, valid: this.validatePoem(event.target.value)})

    }
  }
  validatePoem(value) {
    const lineSplit = value.split('\n')
    const lineCount = lineSplit.length
    debugger
    if (lineSplit[1]) {
      const lineTwo = lineSplit[1].split(' ').length
    }
    if (lineSplit[2]) {
      const lineThree = lineSplit[2].split(' ').length
    }
    const lineOne = lineSplit[0].split(' ').length
    if (lineCount == 3 && lineSplit[2].split(' ').length == 5 && lineSplit[0].split(' ').length == 5 && lineSplit[1].split(' ').length == 3 ) {
      return 'true'
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.typing} value={this.state.value} />
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
