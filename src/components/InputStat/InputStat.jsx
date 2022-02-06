import { useState } from 'react';
import { Input } from '../Input/Input';

export const InputStat = (props) => {
  const { title, value, step } = props;
  const [input, setInput] = useState(value);

  return (
    <div className="input-stat">
      <label htmlFor="">{title}</label>
      <Input
        type="number"
        value={input}
        step={step}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
