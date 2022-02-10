import { Input } from '../Input/Input';

export const CharacterChangingStat = (props) => {
  const { label, name, step, value, onChange, min } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input
        name={name}
        type="number"
        step={step}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.valueAsNumber)}
      />
    </div>
  );
};
