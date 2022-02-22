import { CheckBox } from '../CheckBox/CheckBox';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';

export const GameSpellsList = (props) => {
  const { spells = [], onChange, returnSpellName } = props;

  const toggleChecked = (id) => {
    onChange(id);
  };

  return (
    <List>
      {spells.map((spell, index) => (
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
              <strike>{returnSpellName(spell.id)}</strike>
            </p>
          ) : (
            <p>{returnSpellName(spell.id)}</p>
          )}
        </ListItem>
      ))}
    </List>
  );
};
