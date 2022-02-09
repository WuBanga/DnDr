import { CheckBox } from '../CheckBox/CheckBox';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';

export const GameSpellsList = (props) => {
  const { spells = [], onChange } = props;

  const toggleChecked = (id) => {
    onChange(id);
  };

  return (
    <List>
      {spells.map((spell) => (
        <ListItem
          key={spell.id}
          left={
            <CheckBox
              isChecked={spell.used}
              onCheck={() => toggleChecked(spell.id)}
            />
          }
        >
          {spell.used ? (
            <p>
              <strike>{spell.name}</strike>
            </p>
          ) : (
            <p>{spell.name}</p>
          )}
        </ListItem>
      ))}
    </List>
  );
};
