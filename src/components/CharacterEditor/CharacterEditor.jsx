import { Fragment, useState } from 'react';

import { useFormError } from '../../hooks/useFormError';
import { useInputOnChange } from '../../hooks/useInput';
import { RequiredIcon } from '../../icons/RequiredIcon';
import { Button } from '../Button/Button';
import { FormCantripsList } from '../FormCantripsList/FormCantripsList';
import { FormInput } from '../FormInput/FormInput';
import { FormSpellsList } from '../FormSpellsList/FormSpellsList';
import { FormTextArea } from '../FormTextArea/FormTextArea';
import './CharacterEditor.css';

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
  worldview: [
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
  savingThrows: [
    {
      type: 'required',
      errorMessage: 'Поле "Спасброски" является обязательным',
    },
  ],
};

const defaultCharacter = {
  name: '',
  race: '',
  class: '',
  worldview: '',
  languages: '',
  prehistory: '',
  savingThrows: '',
  skills: '',
  equipment: '',
  spells: [],
  cantrips: [],
  strength: 0,
  wisdom: 0,
  dexterity: 0,
  intelligence: 0,
  charisma: 0,
  hits: 8,
  skillBonus: 0,
  platinum: 0,
  gold: 10,
  electrum: 0,
  silver: 0,
  copper: 0,
  experience: 0,
  level: 1,
  extraHits: 0,
  speed: 30,
  constitution: 1,
  comment: '',
};

export const CharacterEditor = (props) => {
  const { initial, onSubmit } = props;
  const [character, setCharacter] = useState(initial ?? defaultCharacter);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

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
    setIsSubmitButtonDisabled(true);
    setFormErrors({});
    onSubmit(character);
  };

  const formInputOnChange = (name, value) => {
    setCharacter((prevState) => ({ ...prevState, [name]: value }));
  };

  const getProps = (options) => {
    const { name, label, type = 'text', ...otherProps } = options;
    const props = {
      name: name,
      label: validationRules[name]?.some((rule) => rule.type === 'required') ? (
        <Fragment>
          {label}
          <RequiredIcon />
        </Fragment>
      ) : (
        label
      ),
      value: character[name] === undefined ? '' : character[name],
      onChange: useInputOnChange({
        type: type,
        onChange: (value) => formInputOnChange(name, value),
      }),
      error: formErrors[name],
      ...otherProps,
    };

    return props;
  };

  return (
    <form className="character-editor" onSubmit={handleSubmit}>
      <section className="section">
        <h1>Базовая информация</h1>
        <FormInput {...getProps({ name: 'name', label: 'Имя' })} />
        <FormInput {...getProps({ name: 'race', label: 'Раса' })} />
        <FormInput {...getProps({ name: 'class', label: 'Класс' })} />
        <FormInput
          {...getProps({
            name: 'speed',
            label: 'Скорость',
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
      <section className="section">
        <h1>Характеристики</h1>
        <FormInput
          {...getProps({
            name: 'strength',
            label: 'Сила',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'wisdom',
            label: 'Мудрость',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'dexterity',
            label: 'Ловкость',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'intelligence',
            label: 'Интеллект',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'charisma',
            label: 'Харизма',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'constitution',
            label: 'Телосложение',
            type: 'number',
            min: 1,
          })}
        />
        <FormInput
          {...getProps({
            name: 'hits',
            label: 'Хиты (Здоровье)',
            type: 'number',
            min: 1,
          })}
        />
        <FormInput
          {...getProps({
            name: 'skillBonus',
            label: 'Бонус мастерства',
            type: 'number',
          })}
        />
      </section>
      <section className="section">
        <h1>Классовые характеристики</h1>
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
      <section className="section">
        <h1>Другое</h1>
        <FormInput
          {...getProps({
            name: 'platinum',
            label: 'Платина',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'gold',
            label: 'Золото',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'electrum',
            label: 'Электрум',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'silver',
            label: 'Серебро',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'copper',
            label: 'Медь',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'experience',
            label: 'Опыт',
            type: 'number',
            min: 0,
          })}
        />
        <FormInput
          {...getProps({
            name: 'level',
            label: 'Уровень',
            type: 'number',
            min: 1,
          })}
        />
        <FormInput
          {...getProps({
            name: 'extraHits',
            label: 'Доп.хиты',
            type: 'number',
          })}
        />
        <FormTextArea
          {...getProps({ name: 'comment', label: 'Комментарий' })}
        />
      </section>

      <div className="buttons">
        <Button type="submit" disabled={isSubmitButtonDisabled}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};
