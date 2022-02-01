import { useState } from 'react';
import { FormInput } from '../../components/FormInput/FormInput';
import { FormNumberInput } from '../../components/FormInput/FormNumberInput';
import { SpellsList } from '../../components/SpellsList/SpellsList';
import { ConspiraciesList } from '../../components/ConspiraciesList/ConspiraciesList';
import './CreatePage.css';
import { useCharacters } from '../../hooks/useCharacters';

/*
  /имя_персонажа - Сама игра
  /имя_персонажа/edit - Редактирование
  /new|create - Создать
*/

export const CreatePage = () => {
  const [character, setCharacter] = useState({});
  const { addCharacter } = useCharacters();

  const onSubmit = (e) => {
    e.preventDefault();
    addCharacter(character);
  };

  return (
    <form className="create-page__form" onSubmit={onSubmit}>
      <h1>Базовая информация</h1>
      <section className="basics-section">
        <FormInput
          name="name"
          title="Имя"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="race"
          title="Раса"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="class"
          title="Класс"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="speed"
          title="Скорость"
          defaultValue={30}
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="worldview"
          title="Мировоззрение"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="languages"
          title="Языки"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="prehistory"
          title="Предыстория"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
      </section>
      <h1>Характеристики</h1>
      <section className="characteristics-section">
        <FormNumberInput
          name="strength"
          title="Сила"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="wisdom"
          title="Мудрость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="dexterity"
          title="Ловкость"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="intelligence"
          title="Интеллект"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="charisma"
          title="Харизма"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="constitution"
          title="Телосложение"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="hits"
          title="Хиты(Здоровье)"
          defaultValue={8}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="skillBonus"
          title="Бонус мастерства"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
      </section>
      <h1>Классовые характерисики</h1>
      <section className="classes-characteristics-section">
        <FormInput
          name="savingThrows"
          title="Спасброски"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="skills"
          title="Навыки"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <FormInput
          name="equipment"
          title="Снаряжение"
          defaultValue=""
          data={character}
          setData={setCharacter}
        />
        <SpellsList data={character} setData={setCharacter} />
        <ConspiraciesList data={character} setData={setCharacter} />
      </section>
      <h1>Другое</h1>
      <section className="other-section">
        <FormNumberInput
          name="money"
          title="Деньги"
          defaultValue={10}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="experience"
          title="Опыт"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="level"
          title="Уровень"
          defaultValue={1}
          data={character}
          setData={setCharacter}
        />
        <FormNumberInput
          name="extraHits"
          title="Доп.хиты"
          defaultValue={0}
          data={character}
          setData={setCharacter}
        />
      </section>
      <textarea placeholder="Комментарий"></textarea>
      <button type="submit">Создать</button>
    </form>
  );
};
