import { CheckBox } from '../CheckBox/CheckBox';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';

export const GameSpellsList = (props) => {
  const { spells = [], preparedSpells = [], onChange } = props;

  const names = spells.reduce((acc, cur) => {
    acc[cur.id] = cur.name;
    return acc;
  }, {});

  const toggleChecked = (id) => {
    onChange(id);
  };

  return (
    <List>
      {preparedSpells.map((spell, index) => (
        <ListItem
          key={index}
          left={
            <CheckBox
              isChecked={spell.used}
              onCheck={() => toggleChecked(index)}
            />
          }
        >
          {spell.used ? (
            <p>
              <strike>{names[spell.id]}</strike>
            </p>
          ) : (
            <p>{names[spell.id]}</p>
          )}
        </ListItem>
      ))}
    </List>
  );
};
