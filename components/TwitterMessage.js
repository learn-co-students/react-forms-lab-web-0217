import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:''
    };
  
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(ev){
    this.setState({
      message: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}


TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
}
TwitterMessage.defaultProps = {
  maxChars: 140,
}