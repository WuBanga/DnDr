import './IconButton.css';

export const IconButton = (props) => {
  const { icon, className, as, size, ...buttonProps } = props;
  const classes = ['icon-button'];
  let Component = 'button';

  switch (size) {
    case 'large':
      classes.push('icon-button--large');
      break;

    case 'medium':
      classes.push('icon-button--medium');
      break;

    default:
      classes.push('icon-button--small');
      break;
  }

  if (className) {
    classes.push(className);
  }

  if (as !== undefined) {
    Component = as;
  }

  return (
    <Component type="button" {...buttonProps} className={classes.join(' ')}>
      {icon}
    </Component>
  );
};
