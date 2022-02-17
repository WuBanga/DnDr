import { useState } from 'react';

import { MinusIcon } from '../../icons/MinusIcon';
import { PlusIcon } from '../../icons/PlusIcon';
import { generateId } from '../../utils/generateId';
import { IconButton } from '../IconButton/IconButton';
import { Input } from '../Input/Input';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';
import './FormSpellsList.css';

export const FormSpellsList = (props) => {
  const { spells = [], setCharacter } = props;
  const [input, setInput] = useState('');

  const addToList = () => {
    if (input.length === 0) {
      return;
    }
    updateSpells(
      spells.concat({
        id: generateId(),
        name: input,
        prepared: false,
        used: false,
      })
    );
    setInput('');
  };

  const deleteFromList = (id) => {
    updateSpells(spells.filter((spell) => spell.id !== id));
  };

  const updateSpells = (spells) => {
    setCharacter((prevState) => ({ ...prevState, spells: spells }));
  };

  return (
    <div>
      <div className="list-add">
        <label htmlFor="spells">Заклинания:</label>
        <Input
          type="text"
          name="spells"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          right={
            <IconButton icon={<PlusIcon />} onClick={addToList}></IconButton>
          }
        />
      </div>
      <List>
        {spells.map((spell) => (
          <ListItem
            key={spell.id}
            right={
              <IconButton
                icon={<MinusIcon />}
                onClick={(e) => deleteFromList(spell.id)}
              ></IconButton>
            }
          >
            {spell.name}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
