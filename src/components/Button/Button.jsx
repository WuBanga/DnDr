import './Button.css';

export const Button = (props) => {
  const { type = 'button', className, as, color, ...otherProps } = props;
  const classes = ['button'];
  let Component = 'button';

  switch (color) {
    case 'red':
      classes.push('button--red');
      break;

    case 'green':
      classes.push('button--green');
      break;

    default:
      break;
  }

  if (as !== undefined) {
    Component = as;
  }

  if (className) {
    classes.push(className);
  }
  return (
    <Component
      className={classes.join(' ')}
      type={type}
      {...otherProps}
    ></Component>
  );
};
