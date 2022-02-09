export const CharacterStat = (props) => {
  const { title, value } = props;
  const bonus = getBonus(value);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p>{value}</p>
        <p>
          ({bonus >= 0 ? '+' : '-'}
          {bonus})
        </p>
      </div>
    </div>
  );
};

const getBonus = (value) => {
  return Math.abs(Math.floor((value - 10) / 2));
};
