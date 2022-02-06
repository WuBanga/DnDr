export const Stat = (props) => {
  const { title, value } = props;

  const bonus = getBonus(value);

  return (
    <div className="stat">
      <label className="stat__title" htmlFor="">
        {title}
      </label>
      <div className="stat__value">
        <p>{value}</p>
        <p>
          ({bonus >= 0 ? '+' : '-'}
          {Math.abs(bonus)})
        </p>
      </div>
    </div>
  );
};

const getBonus = (value) => {
  return Math.floor((value - 10) / 2);
};
