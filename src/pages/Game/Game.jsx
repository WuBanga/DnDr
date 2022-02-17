import { Link, useParams } from 'react-router-dom';

import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import { CharacterChangingStat } from '../../components/CharacterChangingStat/CharacterChangingStat';
import { CharacterInfo } from '../../components/CharacterInfo/CharacterInfo';
import { CharacterStat } from '../../components/CharacterStat/CharacterStat';
import { GameSpellsList } from '../../components/GameSpellsList/GameSpellsList';
import { Label } from '../../components/Label/Label';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Modal } from '../../components/Modal/Modal';
import { TextArea } from '../../components/TextArea/TextArea';
import { characterActionTypes } from '../../hooks/characterReducer';
import { useCharacter } from '../../hooks/charactersContext';
import './Game.css';

export const Game = () => {
  const params = useParams();
  const { character, isLoading, dispatch } = useCharacter(params.characterId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updateComment = (comment) => {
    dispatch({
      type: characterActionTypes.UPDATE_COMMENT,
      comment: comment,
    });
  };

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
    <div className="game">
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

      <div className="game__left-column">
        <section className="game__character-info game__group">
          <div className="game__left-column">
            <h1 className="game__character-name">{character.name}</h1>
            <h2 className="game__character-subinfo">{character.race}</h2>
            <h2 className="game__character-subinfo">{character.class}</h2>
          </div>
          <div className="game__right-column">
            <CharacterInfo title="Скорость" text={character.speed} />
            <CharacterInfo title="Языки" text={character.languages} />
            <CharacterInfo title="Предыстория" text={character.prehistory} />
          </div>
        </section>
        <section className="game__character-stats game__group">
          <CharacterStat title="Сила" value={character.strength} />
          <CharacterStat title="Мудрость" value={character.wisdom} />
          <CharacterStat title="Ловкость" value={character.dexterity} />
          <CharacterStat title="Интеллект" value={character.intelligence} />
          <CharacterStat title="Харизма" value={character.charisma} />
          <CharacterStat title="Телосложение" value={character.constitution} />
          <CharacterInfo
            className="game__character-oneline-stat"
            title="Бонус мастерства"
            text={`${character.skillBonus >= 0 ? '+' : '-'}${
              character.skillBonus
            }`}
          />
          <CharacterChangingStat
            label="Хиты (Здоровье)"
            name="hits"
            value={character.hits}
            onChange={updateHits}
          />
          <CharacterChangingStat
            label="Доп.хиты"
            name="extraHits"
            value={character.extraHits}
            onChange={updateExtraHits}
          />
        </section>
        <section className="game__character-other game__group">
          <CharacterChangingStat
            label="Деньги"
            name="money"
            step={0.01}
            value={character.money}
            onChange={updateMoney}
          />
          <CharacterChangingStat
            label="Опыт"
            name="experience"
            value={character.experience}
            onChange={updateExperience}
          />
          <CharacterChangingStat
            label="Уровень"
            name="level"
            value={character.level}
            onChange={updateLevel}
          />
          <div className="game__comment game__character-oneline-stat">
            <Label htmlFor="comment">Комментарий</Label>
            <TextArea
              name="comment"
              value={character.comment}
              onChange={updateComment}
            />
          </div>
        </section>
      </div>
      <div className="game__right-column">
        <section>
          <CharacterInfo title="Cпасброски" text={character.savingThrows} />
          <CharacterInfo title="Навыки" text={character.skills} />
          <CharacterInfo title="Снаряжение" text={character.equipment} />
        </section>
        <section>
          <div className="game__character-spells">
            <h1>Заклинания</h1>
            <Button onClick={openModal}>Подготовить</Button>
            <Button onClick={resetUsedSpells}>Сброс</Button>
          </div>
          <GameSpellsList
            spells={character.spells.filter((spell) => spell.prepared === true)}
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
        <Link to={`/${character.id}/update`}>
          <Button>Редактировать</Button>
        </Link>
      </div>
    </div>
  );
};