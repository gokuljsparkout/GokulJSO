import React,{Component} from 'react';

class Clock extends Component
{
  constructor(props) //Mounting Phase
   {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() //Mounting Phase
   {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) //Updating Phase
   {
    if (nextState.time.getSeconds() !== this.state.time.getSeconds()) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) //Updating Phase
  {
    console.log('Clock updated from', prevState.time, 'to', this.state.time);
  }

  componentWillUnmount()  //Unmounted Phase
  {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>The time is:</h1>
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Clock;