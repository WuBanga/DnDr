export const CharacterInfo = (props) => {
  const { className, title, text } = props;
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
