import { List } from '../OldList/List';
import { useEffect } from 'react';

export const SpellsList = (props) => {
  const { data, setData } = props;

  useEffect(() => {
    if (data.spells === undefined) {
      setData((prevState) => ({ ...prevState, spells: [] }));
    }
  }, []);
  const updateSpells = (value) => {
    setData((prevState) => ({ ...prevState, spells: value }));
  };

  return (
    <div>
      <label htmlFor="spells">Заклинания</label>
      <List name="spells" value={data.spells} onChange={updateSpells} />
    </div>
  );
};
