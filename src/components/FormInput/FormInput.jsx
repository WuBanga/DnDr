import { FormControl } from '../FormControl/FormControl';
import { FormError } from '../FormError/FormError';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';

export const FormInput = (props) => {
  const { name, label, error, ...inputProps } = props;

  return (
    <FormControl>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} {...inputProps} />
      {error ? <FormError>{error}</FormError> : null}
    </FormControl>
  );
};
