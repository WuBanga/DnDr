import './Input.css';

export const Input = (props) => {
  const { left, right, ...inputProps } = props;

  return (
    <div className="input-container">
      {left}
      <input className="input focusable" autoComplete="off" {...inputProps} />
      {right}
    </div>
  );
};
