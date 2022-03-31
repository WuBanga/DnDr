import { ComponentPropsWithRef, forwardRef } from 'react';

import './CheckBox.css';

interface CheckBoxProps extends ComponentPropsWithRef<'input'> {
  isChecked: boolean;
  onCheck: () => {};
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    const { isChecked, onCheck } = props;

    return (
      <input
        ref={ref}
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onCheck}
      />
    );
  }
);
