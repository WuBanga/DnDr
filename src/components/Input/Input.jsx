export const Input = (props) => {
  const { left, right, ...inputProps } = props;
  return (
    <div>
      {left}
      <input {...inputProps} />
      {right}
    </div>
  );
};
