import './FormControl.css';

export const FormControl = (props) => {
  const { children } = props;
  return <div className="form-control">{children}</div>;
};
