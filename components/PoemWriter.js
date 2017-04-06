import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)
    this.validatePoem = this.validatePoem.bind(this)

    this.state = {
      value: '',
      isValid: false
    };
  }

  handleChange(event) {
    let isValid = (event.target.value !== '') ? (this.validatePoem(event.target.value)) : (false)
    this.setState({
      value: event.target.value,
      isValid
    })
  }

  validatePoem(poem) {
    let splitPoem = poem.split('\n')
    if (splitPoem.length === 3) {
      let lineOne = splitPoem[0]
      let lineTwo = splitPoem[1]
      let lineThree = splitPoem[2]

      let lineOneLength = lineOne.trim().split(' ').length
      let lineTwoLength = lineTwo.trim().split(' ').length
      let lineThreeLength = lineThree.trim().split(' ').length

      return (lineOneLength === 5 && lineTwoLength === 3 && lineThreeLength === 5)
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} rows="3" cols="60" value={this.state.value} />
        { !this.state.isValid ? (
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        ) : (
          null
        )
        }
    </div>
  );
}
}
