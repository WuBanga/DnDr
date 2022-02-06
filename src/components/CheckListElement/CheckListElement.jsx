export const CheckListElement = (props) => {
  const { elementText, isChecked, onCheck } = props;

  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={onCheck} />
      {isChecked ? (
        <p>
          <strike>{elementText}</strike>
        </p>
      ) : (
        <p>{elementText}</p>
      )}
    </li>
  );
};
