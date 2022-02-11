import './CheckBox.css';

export const CheckBox = (props) => {
  const { isChecked, onCheck } = props;

  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={isChecked}
      onChange={onCheck}
    />
  );
};
