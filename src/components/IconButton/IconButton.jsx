import './IconButton.css';

export const IconButton = (props) => {
  const { icon, className, ...buttonProps } = props;
  const classes = ['icon-button'];
  if (className) {
    classes.push(className);
  }
  return (
    <button {...buttonProps} className={classes.join(' ')}>
      {icon ? <div className="icon-button__icon">{icon}</div> : null}
    </button>
  );
};
