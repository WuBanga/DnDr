import { useEffect } from 'react';

export const FormInput = (props) => {
  const { name, title, data, setData, defaultValue } = props;
  const input = data[name] || defaultValue;
  useEffect(() => {
    if (data[name] === undefined) {
      setData((prevState) => ({ ...prevState, [name]: defaultValue }));
    }
  }, []);
  const updateInput = (e) => {
    const value = e.target.value;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input type="text" name={name} value={input} onChange={updateInput} />
    </div>
  );
};
