import { Link, useParams } from 'react-router-dom';

import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import { CharacterChangingStat } from '../../components/CharacterChangingStat/CharacterChangingStat';
import { CharacterInfo } from '../../components/CharacterInfo/CharacterInfo';
import { CharacterStat } from '../../components/CharacterStat/CharacterStat';
import { GameSpellsList } from '../../components/GameSpellsList/GameSpellsList';
import { HomePageButton } from '../../components/HomePageButton/HomePageButton';
import { Label } from '../../components/Label/Label';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Modal } from '../../components/Modal/Modal';
import { TextArea } from '../../components/TextArea/TextArea';
import { characterActionTypes } from '../../hooks/characterReducer';
import { useCharacter } from '../../hooks/charactersContext';
import { NotFound } from '../NotFound/NotFound';
import './Game.css';

export const Game = () => {
  const params = useParams();
  const { character, isLoading, dispatch } = useCharacter(params.characterId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (character === undefined) {
    return <NotFound />;
  }

  const updateComment = (e) => {
    dispatch({
      type: characterActionTypes.UPDATE_COMMENT,
      comment: e.target.value,
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

  const updatePlatinum = (platinum) => {
    dispatch({
      type: characterActionTypes.UPDATE_PLATINUM,
      platinum: platinum,
    });
  };

  const updateGold = (gold) => {
    dispatch({
      type: characterActionTypes.UPDATE_GOLD,
      gold: gold,
    });
  };

  const updateElectrum = (electrum) => {
    dispatch({
      type: characterActionTypes.UPDATE_ELECTRUM,
      electrum: electrum,
    });
  };

  const updateSilver = (silver) => {
    dispatch({
      type: characterActionTypes.UPDATE_SILVER,
      silver: silver,
    });
  };

  const updateCopper = (copper) => {
    dispatch({
      type: characterActionTypes.UPDATE_COPPER,
      copper: copper,
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

  const toggleUsedSpells = (spellIndex) => {
    dispatch({
      type: characterActionTypes.TOGGLE_USED,
      spellIndex: spellIndex,
    });
  };

  const addPreparedSpell = (spellId) => {
    dispatch({
      type: characterActionTypes.ADD_PREPARED,
      spellId: spellId,
    });
  };

  const deletePreparedSpell = (spellIndex) => {
    dispatch({
      type: characterActionTypes.DELETE_PREPARED,
      spellIndex: spellIndex,
    });
  };

  const returnSpellName = (id) => {
    return character.spells.find((spell) => spell.id === id).name;
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="game">
      <HomePageButton />
      <Modal title="????????????????????" isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <p>??????:</p>
          <List>
            {character.spells.map((spell) => (
              <ListItem
                key={spell.id}
                left={
                  <Button onClick={() => addPreparedSpell(spell.id)}>+</Button>
                }
              >
                {spell.name}
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <p>????????????????????????????:</p>
          <List>
            {character.preparedSpells.map((spell, index) => (
              <ListItem
                key={index}
                left={
                  <Button onClick={() => deletePreparedSpell(index)}>-</Button>
                }
              >
                {returnSpellName(spell.id)}
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
            <CharacterInfo title="????????????????" text={character.speed} />
            <CharacterInfo title="??????????" text={character.languages} />
            <CharacterInfo title="??????????????????????" text={character.prehistory} />
          </div>
        </section>
        <section className="game__character-stats game__group">
          <CharacterStat title="????????" value={character.strength} />
          <CharacterStat title="????????????????" value={character.wisdom} />
          <CharacterStat title="????????????????" value={character.dexterity} />
          <CharacterStat title="??????????????????" value={character.intelligence} />
          <CharacterStat title="??????????????" value={character.charisma} />
          <CharacterStat title="????????????????????????" value={character.constitution} />
          <CharacterInfo
            className="game__character-oneline-stat"
            title="?????????? ????????????????????"
            text={`${character.skillBonus >= 0 ? '+' : '-'}${
              character.skillBonus
            }`}
          />
          <CharacterChangingStat
            label="???????? (????????????????)"
            name="hits"
            value={character.hits}
            onChange={updateHits}
          />
          <CharacterChangingStat
            label="??????.????????"
            name="extraHits"
            value={character.extraHits}
            onChange={updateExtraHits}
          />
        </section>
        <section className="game__character-other game__group">
          <CharacterChangingStat
            label="??????????????"
            name="platinum"
            value={character.platinum}
            onChange={updatePlatinum}
          />
          <CharacterChangingStat
            label="????????????"
            name="gold"
            value={character.gold}
            onChange={updateGold}
          />
          <CharacterChangingStat
            label="????????????????"
            name="electrum"
            value={character.electrum}
            onChange={updateElectrum}
          />
          <CharacterChangingStat
            label="??????????????"
            name="silver"
            value={character.silver}
            onChange={updateSilver}
          />
          <CharacterChangingStat
            label="????????"
            name="copper"
            value={character.copper}
            onChange={updateCopper}
          />
          <CharacterChangingStat
            label="????????"
            name="experience"
            value={character.experience}
            onChange={updateExperience}
          />
          <CharacterChangingStat
            label="??????????????"
            name="level"
            value={character.level}
            onChange={updateLevel}
          />
          <div className="game__comment game__character-oneline-stat">
            <Label htmlFor="comment">??????????????????????</Label>
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
          <CharacterInfo title="C??????????????????" text={character.savingThrows} />
          {character.skills !== '' ? (
            <CharacterInfo title="????????????" text={character.skills} />
          ) : null}
          {character.equipment !== '' ? (
            <CharacterInfo title="????????????????????" text={character.equipment} />
          ) : null}
        </section>
        {character.spells.length !== 0 ? (
          <section>
            <div className="game__character-spells">
              <h1>????????????????????</h1>
              <Button onClick={openModal}>??????????????????????</Button>
              <Button onClick={resetUsedSpells}>??????????</Button>
            </div>
            <GameSpellsList
              spells={character.spells}
              preparedSpells={character.preparedSpells}
              onChange={toggleUsedSpells}
            />
          </section>
        ) : null}
        {character.cantrips.length !== 0 ? (
          <section>
            <h1>????????????????</h1>
            <List>
              {character.cantrips.map((cantrip) => (
                <ListItem key={cantrip}>{cantrip}</ListItem>
              ))}
            </List>
          </section>
        ) : null}
        <Link to={`/${character.id}/update`}>
          <Button>??????????????????????????</Button>
        </Link>
      </div>
    </div>
  );
};
