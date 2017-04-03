const React = require('react');

function validatePoem(content) {
  const splitPoem = content.split('\n')
  if (splitPoem.length !== 3 || splitPoem[0].trim().split(' ').length !== 5 || splitPoem[1].trim().split(' ').length !== 3 || splitPoem[2].trim().split(' ').length !== 5) {
   return false
    }  else {
   return true
 }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let content = event.target.value
    if (content) {
      this.setState({
          content: content,
          isValid: validatePoem(content)
        })
      }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }

}

PoemWriter.propTypes = {
  content: React.PropTypes.string,
  isValid: React.PropTypes.bool
}

module.exports = PoemWriter;
