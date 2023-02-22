import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

//componentWillReceiveProps Lifecycle Method

class ParentComponent extends Component {
  state = {
    someProp: ''
  };

  handleChange = event => {
    this.setState({
      someProp: event.target.value
    });
  };

  render() {
    return (
      <div>
        <label>
          Parent Component: 
          <input type="text" value={this.state.someProp} onChange={this.handleChange} />
        </label>
        <ChildComponent someProp={this.state.someProp} />
      </div>
    );
}
}

export default ParentComponent;
