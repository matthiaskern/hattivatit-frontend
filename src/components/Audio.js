import React, { Component } from 'react';

class Audio extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.refs.el.play();
    } else {
      this.refs.el.pause();
    }
  }

  render() {
    return (
      <audio ref="el" style={{ display: 'none' }} loop>
        <source src={this.props.url} />
      </audio>
    );
  }
}

export default Audio;
