import { Input } from '../Input/Input';

export const CharacterChangingStat = (props) => {
  const { title, name, step, value, onChange } = props;

  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <Input
        name={name}
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.valueAsNumber)}
      />
    </div>
  );
};
