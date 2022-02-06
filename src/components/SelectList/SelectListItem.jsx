export const SelectListItem = (props) => {
  const { children, selected, onSelect } = props;
  return (
    <li>
      <button type="button" onClick={onSelect}>
        {selected ? '+' : '-'}
      </button>
      {children}
    </li>
  );
};
