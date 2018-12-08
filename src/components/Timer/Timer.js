import React, {  Component, Fragment} from 'react';

import './Timer.css';
import Button from './../Button'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    }
  }
  componentDidMount(){
    this.start();
  }
  //start/

  start(){
    if(this.interval){
      return;
    }
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 50
      }))
     
     }, 50);
}
  

  render() {
    const { time } = this.state;

    return<Fragment>  
      <div> { time } </div>
      <Button type='primary'> start </Button>
      <Button type='error'> start2 </Button>
      <Button type='error'> reset </Button>
      </Fragment> 

  }
}

export default Timer;