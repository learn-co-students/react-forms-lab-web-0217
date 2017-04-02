const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "",
      validPoem: false,
    };
    this.updateInput = this.updateInput.bind(this)
    this.validatePoemStructure = this.validatePoemStructure.bind(this)
  }

  validatePoemStructure(text) {
    //if the poem has a valid structure
    let lines = text.split(/\r\n|\r|\n/)
    if ((lines.length === 3) &&
        (lines[0].trim().split(/\s+/).length === 5) &&
        (lines[1].trim().split(/\s+/).length === 3) &&
        (lines[2].trim().split(/\s+/).length === 5)) {
      this.setState({
        validPoem: true,
      })
    } else {
      this.setState({
        validPoem: false,
      })
    }
  }

  updateInput(e) {
    this.setState({
      msg: e.target.value,
    })
    this.validatePoemStructure(e.target.value)
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.updateInput} />
        {this.state.validPoem ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
