import './Button.css';

export const Button = (props) => {
  const { type = 'button', children, onClick, className } = props;
  const classes = ['button'];
  if (className) {
    classes.push(className);
  }
  return (
    <button className={classes.join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
