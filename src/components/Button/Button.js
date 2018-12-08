import React, {
  Component
} from 'react';
import classnames from 'classnames';
import './Button.css';

class Button extends Component {
 
  render() {
    const { children,type }= this.props;
    return <div
     className={classnames({
      'ButtonError' : type==="error",
      'ButtonPrimary' : type==="primary"
     })}

    > {children} </div>;
  }
}

export default Button;