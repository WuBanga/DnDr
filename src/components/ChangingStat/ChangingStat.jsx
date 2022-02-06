import { useState } from 'react';
import { Input } from '../Input/Input';
export const ChangingStat = (props) => {
  const { title, value } = props;
  const [input, setInput] = useState(value);

  return (
    <div className="changing-stat">
      <label htmlFor="">{title}</label>
      <div className="changing-stat__interactive">
        <button type="button">-</button>
        <Input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button">+</button>
      </div>
    </div>
  );
};
