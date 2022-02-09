import { useState } from 'react';

import { Comment } from '../../components/Comment/Comment';
import { FormCantripsList } from '../../components/FormCantripsList/FormCantripsList';
import { FormInput } from '../../components/FormInput/FormInput';
import { FormSpellsList } from '../../components/FormSpellsList/FormSpellsList';
import { useCharacters } from '../../hooks/useCharacters';
import { useFormError } from '../../hooks/useFormError';
import { generateId } from '../../utils/generateId';

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
      {
        validate: isUniqueName,
        errorMessage: 'Такое имя уже занято',
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
        />
        <FormInput
          name="class"
          label="Класс"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="speed"
          type="number"
          label="Скорость"
          defaultValue={30}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="worldview"
          label="Мировоззрение"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="languages"
          label="Языки"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="prehistory"
          label="Предыстория"
          defaultValue=""
          data={character}
          setData={setCharacter}
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
        />
        <FormInput
          name="wisdom"
          type="number"
          label="Мудрость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="dexterity"
          type="number"
          label="Ловкость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="intelligence"
          type="number"
          label="Интеллект"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="charisma"
          type="number"
          label="Харизма"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="constitution"
          type="number"
          label="Телосложение"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="hits"
          type="number"
          label="Хиты(Здоровье)"
          defaultValue={8}
          data={character}
          setData={setCharacter}
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
          defaultValue={10}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="experience"
          type="number"
          label="Опыт"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="level"
          type="number"
          label="Уровень"
          defaultValue={1}
          data={character}
          setData={setCharacter}
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
      <button type="submit">Создать</button>
    </form>
  );
};
