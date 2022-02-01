import { useEffect } from 'react';
import { Input } from '../Input/Input';

export const FormNumberInput = (props) => {
  const { name, title, data, setData, defaultValue } = props;
  const input = data[name] || defaultValue;
  useEffect(() => {
    if (data[name] === undefined) {
      setData((prevState) => ({ ...prevState, [name]: defaultValue }));
    }
  }, []);
  const updateInput = (e) => {
    const value = e.target.valueAsNumber;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <Input type="number" name={name} value={input} onChange={updateInput} />
    </div>
  );
};
