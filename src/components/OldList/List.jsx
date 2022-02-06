import { useState } from 'react';
import { Input } from '../Input/Input';

export const List = (props) => {
  const { value = [], onChange, name } = props;
  const [input, setInput] = useState('');
  const addToList = () => {
    if (input.length === 0) {
      return;
    }
    onChange(value.concat(input));
    setInput('');
  };

  const deleteFromList = (index) => {
    onChange(value.slice(0, index).concat(value.slice(index + 1)));
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          value={input}
          name={name}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={addToList}>
          +
        </button>
      </div>
      <ul>
        {value.map((item, index) => (
          <li key={item}>
            <p>{item}</p>
            <button type="button" onClick={() => deleteFromList(index)}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
