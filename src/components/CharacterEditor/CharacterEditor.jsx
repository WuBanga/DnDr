import { useState } from 'react';

import { useFormError } from '../../hooks/useFormError';
import { generateId } from '../../utils/generateId';
import { FormCantripsList } from '../FormCantripsList/FormCantripsList';
import { FormInput } from '../FormInput/FormInput';
import { FormSpellsList } from '../FormSpellsList/FormSpellsList';
import { FormTextArea } from '../FormTextArea/FormTextArea';

const validationRules = {
  name: [
    {
      type: 'required',
      errorMessage: 'Поле "Имя" является обязательным',
    },
  ],
  race: [
    {
      type: 'required',
      errorMessage: 'Поле "Раса" является обязательным',
    },
  ],
  class: [
    {
      type: 'required',
      errorMessage: 'Поле "Класс" является обязательным',
    },
  ],
  wisdom: [
    {
      type: 'required',
      errorMessage: 'Поле "Мудрость" является обязательным',
    },
  ],
  languages: [
    {
      type: 'required',
      errorMessage: 'Поле "Языки" является обязательным',
    },
  ],
  prehistory: [
    {
      type: 'required',
      errorMessage: 'Поле "Предыстория" является обязательным',
    },
  ],
  saveThrows: [
    {
      type: 'required',
      errorMessage: 'Поле "Спасброски" является обязательным',
    },
  ],
};

export const CharacterEditor = (props) => {
  const { initial, onSubmit } = props;
  const [character, setCharacter] = useState(initial ?? {});
  const [formErrors, setFormErrors] = useState({});

  const { validate } = useFormError({
    rules: validationRules,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validate(character);
    if (validationResult !== true) {
      setFormErrors(validationResult);
      return;
    }
    setFormErrors({});

    const id = character.id === undefined ? generateId() : character.id;
    console.log(id);
    onSubmit(id, character);
  };

  const getProps = (options) => {
    const {
      name,
      label,
      type = 'text',
      defaultValue = '',
      ...otherProps
    } = options;
    const props = {
      name: name,
      label: label,
      type: type,
      value: character[name] ?? defaultValue,
      onChange: (e) => {
        let value;
        if ('target' in e) {
          if (type === 'number') {
            value = e.target.valueAsNumber;
          } else {
            value = e.target.value;
          }
        } else {
          value = e;
        }
        setCharacter((prevState) => ({ ...prevState, [name]: value }));
      },
      error: formErrors[name],
      ...otherProps,
    };

    return props;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Базовая информация</h1>
      <section>
        <FormInput {...getProps({ name: 'name', label: 'Имя' })} />
        <FormInput {...getProps({ name: 'race', label: 'Раса' })} />
        <FormInput {...getProps({ name: 'class', label: 'Класс' })} />
        <FormInput
          {...getProps({
            name: 'speed',
            label: 'Скорость',
            defaultValue: 30,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({ name: 'worldview', label: 'Мировоззрение' })}
        />
        <FormInput {...getProps({ name: 'languages', label: 'Языки' })} />
        <FormInput
          {...getProps({ name: 'prehistory', label: 'Предыстория' })}
        />
      </section>
      <h1>Характеристики</h1>
      <section>
        <FormInput
          {...getProps({
            name: 'strength',
            label: 'Сила',
            defaultValue: 0,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'wisdom',
            label: 'Мудрость',
            defaultValue: 0,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'dexterity',
            label: 'Ловкость',
            defaultValue: 0,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'intelligence',
            label: 'Интеллект',
            defaultValue: 0,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'charisma',
            label: 'Харизма',
            defaultValue: 0,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'constitution',
            label: 'Телосложение',
            defaultValue: 1,
            type: 'number',
            min: 1,
          })}
        />
        <FormInput
          {...getProps({
            name: 'hits',
            label: 'Хиты(Здоровье)',
            defaultValue: 8,
            type: 'number',
            min: 1,
          })}
        />
        <FormInput
          {...getProps({
            name: 'skillBonus',
            label: 'Бонус мастерства',
            defaultValue: 0,
            type: 'number',
          })}
        />
      </section>
      <h1>Классовые характеристики</h1>
      <section>
        <FormInput
          {...getProps({
            name: 'savingThrows',
            label: 'Спасброски',
          })}
        />
        <FormInput
          {...getProps({
            name: 'skills',
            label: 'Навыки',
          })}
        />
        <FormInput
          {...getProps({
            name: 'equipment',
            label: 'Снаряжение',
          })}
        />
        <FormSpellsList spells={character.spells} setCharacter={setCharacter} />
        <FormCantripsList
          cantrips={character.cantrips}
          setCharacter={setCharacter}
        />
      </section>
      <h1>Другое</h1>
      <section>
        <FormInput
          {...getProps({
            name: 'money',
            label: 'Деньги',
            defaultValue: 10,
            type: 'number',
            min: 0,
            step: 0.01,
          })}
        />
        <FormInput
          {...getProps({
            name: 'experience',
            label: 'Опыт',
            defaultValue: 0,
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'level',
            label: 'Уровень',
            defaultValue: 1,
            type: 'number',
            min: 1,
          })}
        />
        <FormInput
          {...getProps({
            name: 'extraHits',
            label: 'Доп.хиты',
            defaultValue: 0,
            type: 'number',
          })}
        />
      </section>
      <FormTextArea {...getProps({ name: 'comment', label: 'Комментарий' })} />
      <button type="submit">Сохранить</button>
    </form>
  );
};
