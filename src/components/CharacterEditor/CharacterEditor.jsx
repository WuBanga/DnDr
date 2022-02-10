import { useState } from 'react';

import { useCharacters } from '../../hooks/useCharacters';
import { useFormError } from '../../hooks/useFormError';
import { generateId } from '../../utils/generateId';
import { Comment } from '../Comment/Comment';
import { FormCantripsList } from '../FormCantripsList/FormCantripsList';
import { FormInput } from '../FormInput/FormInput';
import { FormSpellsList } from '../FormSpellsList/FormSpellsList';

export const CharacterEditor = (props) => {
  const { initial, onSubmit } = props;
  const [character, setCharacter] = useState(initial ?? {});
  const { characters } = useCharacters();
  const [formError, setFormError] = useState({});

  const isUniqueName = (name) => {
    if (!characters) {
      return true;
    }
    return !characters.some((character) => character.name === name);
  };

  const validationRules = {
    name: [
      {
        type: 'required',
        errorMessage: 'Поле "Имя" является обязательным',
      },
      // {
      //   validate: isUniqueName,
      //   errorMessage: 'Такое имя уже занято',
      // },
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

  const { getErrorMessage, validate } = useFormError({
    rules: validationRules,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validate(character);
    if (validationResult !== true) {
      setFormError(validationResult);
      return;
    }
    setFormError({});

    const id = character.id === undefined ? generateId() : character.id;
    console.log(id);
    onSubmit(id, character);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Базовая информация</h1>
      <section>
        <FormInput
          name="name"
          label="Имя"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
        <FormInput
          name="race"
          label="Раса"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
        <FormInput
          name="class"
          label="Класс"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
        <FormInput
          name="speed"
          type="number"
          label="Скорость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="worldview"
          label="Мировоззрение"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
        <FormInput
          name="languages"
          label="Языки"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
        <FormInput
          name="prehistory"
          label="Предыстория"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
      </section>
      <h1>Характеристики</h1>
      <section>
        <FormInput
          name="strength"
          type="number"
          label="Сила"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="wisdom"
          type="number"
          label="Мудрость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="dexterity"
          type="number"
          label="Ловкость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="intelligence"
          type="number"
          label="Интеллект"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="charisma"
          type="number"
          label="Харизма"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="constitution"
          type="number"
          label="Телосложение"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={1}
        />
        <FormInput
          name="hits"
          type="number"
          label="Хиты(Здоровье)"
          defaultValue={1}
          data={character}
          setData={setCharacter}
          min={1}
        />
        <FormInput
          name="skillBonus"
          type="number"
          label="Бонус мастерства"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
      </section>
      <h1>Классовые характеристики</h1>
      <section>
        <FormInput
          name="savingThrows"
          label="Спасброски"
          defaultValue=""
          data={character}
          setData={setCharacter}
          formError={formError}
        />
        <FormInput
          name="skills"
          label="Навыки"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="equipment"
          label="Снаряжение"
          defaultValue=""
          data={character}
          setData={setCharacter}
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
          name="money"
          type="number"
          label="Деньги"
          step={0.01}
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="experience"
          type="number"
          label="Опыт"
          defaultValue={0}
          data={character}
          setData={setCharacter}
          min={0}
        />
        <FormInput
          name="level"
          type="number"
          label="Уровень"
          defaultValue={1}
          data={character}
          setData={setCharacter}
          min={1}
        />
        <FormInput
          name="extraHits"
          type="number"
          label="Доп.хиты"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
      </section>
      <Comment />
      <button type="submit">Сохранить</button>
    </form>
  );
};
