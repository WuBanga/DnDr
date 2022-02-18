import { useState } from 'react';

import { MinusIcon } from '../../icons/MinusIcon';
import { PlusIcon } from '../../icons/PlusIcon';
import { IconButton } from '../IconButton/IconButton';
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
    <div className="list-add">
      <label htmlFor="cantrips">Заговоры:</label>
      <Input
        type="text"
        name="cantrips"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        right={
          <IconButton icon={<PlusIcon />} onClick={addToList}></IconButton>
        }
      />
      <List>
        {cantrips.map((cantrip, index) => (
          <ListItem
            key={cantrip}
            right={
              <IconButton
                icon={<MinusIcon />}
                onClick={(e) => deleteFromList(index)}
              ></IconButton>
            }
          >
            {cantrip}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
