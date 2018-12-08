import React, {
  Component
} from 'react';
import './Button.css';

class Button extends Component {
 
  render() {
    const { children }= this.props;
    return <div> {children} </div>;
  }
}

export default Button;