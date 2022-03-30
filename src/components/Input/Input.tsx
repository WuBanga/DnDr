import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import './Input.css';

interface InputProps extends ComponentPropsWithRef<'input'> {
  left?: ReactNode;
  right?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { left, right, ...inputProps } = props;

  return (
    <div className="input-container">
      {left}
      <input
        ref={ref}
        className="input focusable"
        autoComplete="off"
        {...inputProps}
      />
      {right}
    </div>
  );
});
