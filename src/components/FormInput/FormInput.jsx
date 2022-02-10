import { useEffect } from 'react';

import { Input } from '../Input/Input';

export const FormInput = (props) => {
  const {
    label,
    name,
    type = 'text',
    step,
    data,
    setData,
    defaultValue,
    formError,
    min,
  } = props;
  const input = data[name] || defaultValue;
  const error = formError ? formError[name] : undefined;

  useEffect(() => {
    if (data[name] === undefined) {
      setData((prevState) => ({ ...prevState, [name]: defaultValue }));
    }
  }, []);

  const updateInput = (e) => {
    let value;
    if (type === 'number') {
      value = e.target.valueAsNumber;
    } else {
      value = e.target.value;
    }

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <label htmlFor="">{label}</label>
      <Input
        type={type}
        name={name}
        value={input}
        step={step}
        onChange={updateInput}
        min={min}
      />
      {error ? <p>{error}</p> : null}
    </div>
  );
};
