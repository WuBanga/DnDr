export const Input = (props) => {
  const { ...inputProps } = props;
  return (
    <div>
      <input {...inputProps} />
    </div>
  );
};
