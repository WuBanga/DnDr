import './Input.css';

export const Input = (props) => {
  const { left, right, ...inputProps } = props;

  return (
    <div className="input-container">
      {left}
      <input className="input focusable" autocomplete="off" {...inputProps} />
      {right}
    </div>
  );
};
