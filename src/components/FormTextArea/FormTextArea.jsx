import { Label } from '../Label/Label';
import { TextArea } from '../TextArea/TextArea';

export const FormTextArea = (props) => {
  const { name, value, onChange, label } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <TextArea name={name} value={value} onChange={onChange}></TextArea>
    </div>
  );
};
