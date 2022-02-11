import { useState } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';

export const FormCantripsList = (props) => {
  const { cantrips = [], setCharacter } = props;
  const [input, setInput] = useState('');

  const addToList = () => {
    if (input.length === 0) {
      return;
    }
    updateCantrips(cantrips.concat(input));
    setInput('');
  };

  const deleteFromList = (index) => {
    updateCantrips(cantrips.slice(0, index).concat(cantrips.slice(index + 1)));
  };

  const updateCantrips = (cantrips) => {
    setCharacter((prevState) => ({ ...prevState, cantrips: cantrips }));
  };

  return (
    <div>
      <div className="list-add">
        <label htmlFor="cantrips">Заговоры:</label>
        <Input
          type="text"
          name="cantrips"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          right={<Button onClick={addToList}>+</Button>}
        />
      </div>
      <List>
        {cantrips.map((cantrip, index) => (
          <ListItem
            key={cantrip}
            right={<Button onClick={(e) => deleteFromList(index)}>-</Button>}
          >
            {cantrip}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
