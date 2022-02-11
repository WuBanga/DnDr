import './List.css';

export const ListItem = (props) => {
  const { left, right, children } = props;
  return (
    <li className="list-item">
      {left}
      <div className="list-text">{children}</div>
      {right}
    </li>
  );
};
