export const InventoryStat = (props) => {
  const { title, value } = props;
  return (
    <div>
      <label htmlFor="">{title}:</label>
      <p>{value}</p>
    </div>
  );
};
