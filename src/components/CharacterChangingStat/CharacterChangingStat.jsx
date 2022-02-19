import { useInputOnChange } from '../../hooks/useInput';
import { Input } from '../Input/Input';

export const CharacterChangingStat = (props) => {
  const { label, name, value, onChange, min } = props;

  console.log(value);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input
        name={name}
        value={value}
        min={min}
        onChange={useInputOnChange({ type: 'number', onChange: onChange })}
      />
    </div>
  );
};
