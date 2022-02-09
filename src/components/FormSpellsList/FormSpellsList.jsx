import { useState } from 'react';

import { generateId } from '../../utils/generateId';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';

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
      <label htmlFor="spells">Заклинания:</label>
      <Input
        type="text"
        name="spells"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        right={<Button onClick={addToList}>+</Button>}
      />
      <List>
        {spells.map((spell) => (
          <ListItem
            key={spell.id}
            right={<Button onClick={(e) => deleteFromList(spell.id)}>-</Button>}
          >
            {spell.name}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
