export const ListItem = (props) => {
  const { left, right, children } = props;
  return (
    <li>
      {left}
      <div>{children}</div>
      {right}
    </li>
  );
};
