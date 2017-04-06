import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {poem: ""};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea onChange="this.handleChange" name="poem" rows="3" cols="60" />
        <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      </div>
    );
  }
}
