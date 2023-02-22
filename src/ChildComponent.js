import React, { Component } from 'react';

class ChildComponent extends Component {
  state = {
    count: 0
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.someProp !== nextProps.someProp) {
      this.setState({
        count: this.state.count + 1
      });
    }
  }

  render() {
    return (
      <div>
        <p>Child Component:</p>
        <p>Received someProp: {this.props.someProp}</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ChildComponent;
