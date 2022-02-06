import { CheckListElement } from '../CheckListElement/CheckListElement';

export const CheckList = (props) => {
  const { items, checked, onChange } = props;

  const toggleChecked = (value) => {
    if (checked.includes(value)) {
      onChange(checked.filter((item) => item !== value));
    } else {
      onChange(checked.concat(value));
    }
  };

  return (
    <ul>
      {items.map((value) => {
        const isChecked = checked.includes(value);
        return (
          <CheckListElement
            key={value}
            elementText={value}
            isChecked={isChecked}
            onCheck={(e) => toggleChecked(value)}
          />
        );
      })}
    </ul>
  );
};
