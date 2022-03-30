import { ComponentPropsWithRef, forwardRef } from 'react';

import './Button.css';

interface ButtonProps extends ComponentPropsWithRef<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type = 'button', className, color, ...otherProps } = props;
    const classes = ['button'];

    switch (color) {
      case 'red':
        classes.push('button--red');
        break;

      case 'green':
        classes.push('button--green');
        break;

      default:
        break;
    }

    if (className) {
      classes.push(className);
    }
    return (
      <button
        ref={ref}
        className={classes.join(' ')}
        type={type}
        {...otherProps}
      ></button>
    );
  }
);
