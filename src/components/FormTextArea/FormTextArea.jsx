import { FormLabel } from '../FormLabel/FormLabel';

export const FormTextArea = (props) => {
  const { name, value, onChange, label, defaultValue } = props;
  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <textarea
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
};
