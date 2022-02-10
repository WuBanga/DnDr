import { FormError } from '../FormError/FormError';
import { FormLabel } from '../FormLabel/FormLabel';
import { Input } from '../Input/Input';

export const FormInput = (props) => {
  const { name, label, error, ...inputProps } = props;

  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input name={name} {...inputProps} />
      {error ? <FormError>{error}</FormError> : null}
    </div>
  );
};
