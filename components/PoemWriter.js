const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.validatePoem = this.validatePoem.bind(this)
  }

  handleChange(event) {
    if (event.target.value) {
      this.setState({ content: event.target.value, isValid: this.validatePoem(event.target.value) })
    }
  }

  validatePoem(poem) {
    const splitPoem = poem.split('\n')
    if (splitPoem.length !== 3 || splitPoem[0].trim().split(' ').length !== 5 || splitPoem[1].trim().split(' ').length !== 3 || splitPoem[2].trim().split(' ').length !== 5) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
