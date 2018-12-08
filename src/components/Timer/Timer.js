import React, {  Component, Fragment} from 'react';

import './Timer.css';
import Button from './../Button'

class Timer extends Component {
  constructor(props) {
    super(props);

    this.time = 0;
  }
  render() {
    return<Fragment>  
      <Button type='error'> start </Button>
      <Button type='primary'> start2 </Button>
      </Fragment> ;

  }
}

export default Timer;