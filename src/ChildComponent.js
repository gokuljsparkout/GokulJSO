import React, { Component } from 'react';

class ChildComponent extends Component {
  state = {
    count: 0,
    prevSomeProp: ''
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someProp !== prevState.prevSomeProp) {
      return {
        count: prevState.count + 1,
        prevSomeProp: nextProps.someProp
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h1>Child Component:</h1>
        <p>Received someProp: {this.props.someProp}</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ChildComponent;
