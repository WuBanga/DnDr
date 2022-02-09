import { Link, useParams } from 'react-router-dom';

import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import { CharacterChangingStat } from '../../components/CharacterChangingStat/CharacterChangingStat';
import { CharacterInfo } from '../../components/CharacterInfo/CharacterInfo';
import { CharacterStat } from '../../components/CharacterStat/CharacterStat';
import { GameSpellsList } from '../../components/GameSpellsList/GameSpellsList';
import { Input } from '../../components/Input/Input';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Modal } from '../../components/Modal/Modal';
import { characterActionTypes, useCharacter } from '../../hooks/useCharacter';
import './Game.css';

export const Game = () => {
  const params = useParams();
  const { character, isLoading, dispatch } = useCharacter(params.characterId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updateHits = (hits) => {
    dispatch({
      type: characterActionTypes.UPDATE_HITS,
      hits: hits,
    });
  };

  const updateExtraHits = (extraHits) => {
    dispatch({
      type: characterActionTypes.UPDATE_EXTRA_HITS,
      extraHits: extraHits,
    });
  };

  const updateMoney = (money) => {
    dispatch({
      type: characterActionTypes.UPDATE_MONEY,
      money: money,
    });
  };

  const updateExperience = (experience) => {
    dispatch({
      type: characterActionTypes.UPDATE_EXPERIENCE,
      experience: experience,
    });
  };
  const updateLevel = (level) => {
    dispatch({
      type: characterActionTypes.UPDATE_LEVEL,
      level: level,
    });
  };

  const resetUsedSpells = () => {
    dispatch({
      type: characterActionTypes.RESET_USED,
    });
  };

  const toggleUsedSpells = (spellId) => {
    dispatch({
      type: characterActionTypes.TOGGLE_USED,
      spellId: spellId,
    });
  };

  const togglePreparedSpells = (spellId) => {
    dispatch({
      type: characterActionTypes.TOGGLE_PREPARED,
      spellId: spellId,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Modal title="Заклинания" isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <p>Все:</p>
          <List>
            {character.spells.map((spell) => (
              <ListItem
                key={spell.id}
                left={
                  <Button onClick={() => togglePreparedSpells(spell.id)}>
                    +
                  </Button>
                }
              >
                {spell.name}
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <p>Подготовленные:</p>
          <List>
            {character.spells
              .filter((spell) => spell.prepared === true)
              .map((spell) => (
                <ListItem
                  key={spell.id}
                  left={
                    <Button onClick={() => togglePreparedSpells(spell.id)}>
                      -
                    </Button>
                  }
                >
                  {spell.name}
                </ListItem>
              ))}
          </List>
        </div>
      </Modal>
      <section>
        <Link to={`/${character.id}/update`}>
          <button>Редактировать</button>
        </Link>
        <CharacterInfo title="Имя" text={character.name} />
        <CharacterInfo title="Раса" text={character.race} />
        <CharacterInfo title="Класс" text={character.class} />
        <CharacterInfo title="Скорость" text={character.speed} />
        <CharacterInfo title="Языки" text={character.languages} />
        <CharacterInfo title="Предыстория" text={character.prehistory} />
      </section>
      <section className="character-info">
        <div className="character-info__left-column">
          <section className="character-info">
            <CharacterStat title="Сила" value={character.strength} />
            <CharacterStat title="Мудрость" value={character.wisdom} />
            <CharacterStat title="Ловкость" value={character.dexterity} />
            <CharacterStat title="Интеллект" value={character.intelligence} />
            <CharacterStat title="Харизма" value={character.charisma} />
            <CharacterStat
              title="Телосложение"
              value={character.constitution}
            />
            <CharacterInfo
              className="stat stat--oneline"
              title="Бонус мастерства"
              text={character.skillBonus}
            />
            <CharacterChangingStat
              title="Хиты (Здоровье)"
              name="hits"
              value={character.hits}
              onChange={updateHits}
            />
            <CharacterChangingStat
              title="Доп.хиты"
              name="extraHits"
              value={character.extraHits}
              onChange={updateExtraHits}
            />
          </section>
          <section>
            <div>
              <label htmlFor="money">Деньги</label>
              <Input
                name="money"
                type="number"
                value={character.money}
                onChange={updateMoney}
              />
            </div>
            <div>
              <label htmlFor="experience">Опыт</label>
              <Input
                name="experience"
                value={character.experience}
                onChange={updateExperience}
              />
            </div>
            <div>
              <label htmlFor="level">Уровень</label>
              <Input
                name="level"
                value={character.level}
                onChange={updateLevel}
              />
            </div>
          </section>
        </div>
        <div className="character-info__right-column">
          <section>
            <CharacterInfo title="Cпасброски" text={character.savingThrows} />
            <CharacterInfo title="Навыки" text={character.skills} />
            <CharacterInfo title="Снаряжение" text={character.equipment} />
          </section>
          <section>
            <div>
              <h1>Заклинания</h1>
              <Button onClick={openModal}>Подготовить</Button>
              <Button onClick={resetUsedSpells}>Сброс</Button>
            </div>
            <GameSpellsList
              spells={character.spells.filter(
                (spell) => spell.prepared === true
              )}
              onChange={toggleUsedSpells}
            />
          </section>
          <section>
            <h1>Заговоры</h1>
            <List>
              {character.cantrips.map((cantrip) => (
                <ListItem key={cantrip}>{cantrip}</ListItem>
              ))}
            </List>
          </section>
        </div>
      </section>
    </div>
  );
};
