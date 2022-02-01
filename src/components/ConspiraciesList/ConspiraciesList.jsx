import { List } from '../List/List';
import { useEffect } from 'react';

export const ConspiraciesList = (props) => {
  const { data, setData } = props;

  useEffect(() => {
    if (data.conspiracies === undefined) {
      setData((prevState) => ({ ...prevState, conspiracies: [] }));
    }
  }, []);
  const updateConspiracies = (value) => {
    setData((prevState) => ({ ...prevState, conspiracies: value }));
  };

  return (
    <div>
      <label htmlFor="conspiracies">Заговоры</label>
      <List
        name="conspiracies"
        value={data.conspiracies}
        onChange={updateConspiracies}
      />
    </div>
  );
};
