import React, {
  Component
} from 'react';
import './Timer.css';
import Button from './../Button'

class Timer extends Component {
  constructor(props){
    super(props);

    this.time = 0;
  }
  render() {
    return  <
      div> Timer <Button>start</Button></div>;
    
  }
}

export default Timer;