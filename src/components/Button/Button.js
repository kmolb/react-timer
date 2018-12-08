import React, {
  Component
} from 'react';
import classnames from 'classnames';
import './Button.css';

class Button extends Component {
 
  render() {
    const { children,type }= this.props;
    return <div
     className={classnames('Button',{
      'primary' : type==="primary",
      'error' : type==="error"
     })}

    > {children} </div>;
  }
}

export default Button;