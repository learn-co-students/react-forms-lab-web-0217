import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.changeVal = this.changeVal.bind(this)
    this.countChars = this.countChars.bind(this)
    this.state = {
      tweet:""
    };
  }

  changeVal(event) {
    this.setState({
      tweet:event.target.value
    })
  }

  countChars() {
    let count = this.props.maxChars-this.state.tweet.length
    return count
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.changeVal} />
        <p>You have {this.countChars()} characters remaining</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number.isRequired
}

TwitterMessage.defaultProps = {
  maxChars: 140
}
