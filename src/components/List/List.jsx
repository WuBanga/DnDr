import './List.css';

export const List = (props) => {
  const { children } = props;
  return <ul className="list">{children}</ul>;
};
