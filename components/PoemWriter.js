import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = { value: '', valid: true };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });

    this.validate(this.state.value);
  }

  validate(value) {
    const valueSplit = value.split('\n')
    if (this.state.valid && !(valueSplit.length == 3 && valueSplit[0].split(' ').length == 5 && valueSplit[1].split(' ').length == 3 && valueSplit[2].split(' ').length == 5)) {
      this.setState({
        valid: false
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} />
        {this.state.valid ? <div></div> : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
