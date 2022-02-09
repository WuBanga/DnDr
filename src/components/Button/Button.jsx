export const Button = (props) => {
  const { type = 'button', children, onClick } = props;
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
