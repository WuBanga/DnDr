export const CheckBox = (props) => {
  const { isChecked, onCheck } = props;
  return <input type="checkbox" checked={isChecked} onChange={onCheck} />;
};
