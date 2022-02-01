import { useEffect } from 'react';

export const FormInput = (props) => {
  const { name, title, data, setData, defaultValue } = props;
  useEffect(() => {
    if (data[name] === undefined) {
      setData((prevState) => ({ ...prevState, [name]: defaultValue }));
    }
  }, []);
  const updateInput = (e) => {
    const value = e.target.value;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const input = data[name] || defaultValue;
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input type="text" name={name} value={input} onChange={updateInput} />
    </div>
  );
};
