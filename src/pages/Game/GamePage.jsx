import { Stat } from '../../components/Stat/Stat';
import { ChangingStat } from '../../components/ChangingStat/ChangingStat';
import { InputStat } from '../../components/InputStat/InputStat';
import { Comment } from '../../components/Comment/Comment';
import { InventoryStat } from '../../components/InventoryStat/InventoryStat';
import { CheckList } from '../../components/CheckList/CheckList';
import { Modal } from '../../components/Modal/Modal';
import { SelectList } from '../../components/SelectList/SelectList';
import { SelectListItem } from '../../components/SelectList/SelectListItem';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter, characterActionTypes } from '../../hooks/useCharacter';
import './GamePage.css';

export const GamePage = () => {
  const params = useParams();
  const { character, isLoading, dispatch } = useCharacter(params.characterName);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updatePreparedSpells = (newPrepared) => {
    dispatch({
      type: characterActionTypes.SET_PREPARED,
      spellsList: newPrepared,
    });
  };

  const toggleUsedSpell = (spellIndex) => {
    dispatch({
      type: characterActionTypes.TOGGLE_USED,
      spellIndex: spellIndex,
    });
  };

  const resetUsedSpells = () => {
    dispatch({
      type: characterActionTypes.RESET_USED,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Modal title={'Заклинания'} isOpen={isModalOpen} onClose={closeModal}>
        <p>Все:</p>
        <SelectList>
          {character.preparedSpells.map((spell, index) => {
            <SelectListItem
              selected={spell.used}
              onSelect={toggleUsedSpell(index)}
            >
              {spell.name}
            </SelectListItem>;
          })}
        </SelectList>
        <p>Подготовленные:</p>
        <SelectList>
          {character.preparedSpells
            .filter((spell) => spell.used === true)
            .map((spell, index) => {
              <SelectListItem
                selected={spell.used}
                onSelect={toggleUsedSpell(index)}
              >
                {spell.name}
              </SelectListItem>;
            })}
        </SelectList>
      </Modal>

      <section className="info">
        <p>
          {character.name}, {character.race}, {character.class}
        </p>
        <p>Скорость: {character.speed}</p>
        <p>Языки: {character.languages}</p>
        <p>Предыстория: {character.prehistory}</p>
      </section>
      <section className="character-info">
        <div className="character-info__left-column">
          <section className="stats">
            <Stat title="Сила" value={character.strength} />
            <Stat title="Мудрость" value={character.wisdom} />
            <Stat title="Ловкость" value={character.dexterity} />
            <Stat title="Интеллект" value={character.intelligence} />
            <Stat title="Харизма" value={character.charisma} />
            <Stat title="Телосложение" value={character.constitution} />
            <div className="stat stat--oneline">
              <label htmlFor="">Бонус мастерства</label>
              <p>{character.skillBonus}</p>
            </div>
            <ChangingStat title="Хиты(Здоровье)" value={character.hits} />
            <ChangingStat title="Доп. Хиты" value={character.extraHits} />
          </section>
          <section className="other">
            <InputStat title="Деньги" value={character.money} step={0.01} />
            <InputStat title="Опыт" value={character.experience} step={1} />
            <InputStat title="Уровень" value={character.level} step={1} />
            <Comment />
          </section>
        </div>
        <div className="character-info__right-column">
          <section className="inventory">
            <InventoryStat title="Спасброски" value={character.savingThrows} />
            <InventoryStat title="Навыки" value={character.skills} />
            <InventoryStat title="Снаряжение" value={character.equipment} />
          </section>
          <section className="spells">
            <label htmlFor="">Заклинания:</label>
            <button type="button" onClick={openModal}>
              Подготовить
            </button>
            <button type="button" onClick={resetCheckedSpells}>
              Сброс
            </button>
            <CheckList
              items={preparedSpells}
              checked={checkedSpells}
              onChange={updateCheckedSpells}
            />
          </section>
          <section className="conspiracies">
            <label htmlFor="">Заговоры:</label>
            <button type="button" onClick={resetCheckedConspiracies}>
              Сброс
            </button>
            <CheckList
              items={character.conspiracies}
              checked={checkedConspiracies}
              onChange={updateCheckedConspiracies}
            />
          </section>
        </div>
      </section>
    </div>
  );
};
