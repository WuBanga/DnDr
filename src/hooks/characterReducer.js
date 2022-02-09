export const characterActionTypes = {
  SET: 'set',
  TOGGLE_USED: 'toggleUsed',
  RESET_USED: 'resetUsed',
  TOGGLE_PREPARED: 'togglePrepared',
  UPDATE_HITS: 'updateHits',
  UPDATE_EXTRA_HITS: 'updateExtraHits',
  UPDATE_MONEY: 'updateMoney',
  UPDATE_EXPERIENCE: 'updateExperience',
  UPDATE_LEVEL: 'updateLevel',
};

export const characterReducer = (state, action) => {
  switch (action.type) {
    case characterActionTypes.SET:
      return action.character;
    case characterActionTypes.TOGGLE_PREPARED:
      return togglePrepared(state, action.spellId);
    case characterActionTypes.TOGGLE_USED:
      return toggleUsed(state, action.spellId);
    case characterActionTypes.RESET_USED:
      return resetUsed(state);
    case characterActionTypes.UPDATE_HITS:
      return updateHits(state, action.hits);
    case characterActionTypes.UPDATE_EXTRA_HITS:
      return updateExtraHits(state, action.extraHits);
    case characterActionTypes.UPDATE_MONEY:
      return updateMoney(state, money);
    case characterActionTypes.UPDATE_EXPERIENCE:
      return updateExperience(state, experience);
    case characterActionTypes.UPDATE_LEVEL:
      return updateLevel(state, level);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

const updateLevel = (character, level) => {
  return {
    ...character,
    level: level,
  };
};

const updateExperience = (character, experience) => {
  return {
    ...character,
    experience: experience,
  };
};

const updateMoney = (character, money) => {
  return {
    ...character,
    money: money,
  };
};

const updateExtraHits = (character, extraHits) => {
  return {
    ...character,
    extraHits: extraHits,
  };
};

const updateHits = (character, hits) => {
  return {
    ...character,
    hits: hits,
  };
};

const togglePrepared = (character, spellId) => {
  return {
    ...character,
    spells: character.spells.map((spell) => {
      if (spell.id === spellId) {
        return {
          ...spell,
          prepared: !spell.prepared,
        };
      }
      return spell;
    }),
  };
};

const resetUsed = (character) => {
  return {
    ...character,
    spells: character.spells.map((spell) => {
      return {
        ...spell,
        used: false,
      };
    }),
  };
};

const toggleUsed = (character, spellId) => {
  return {
    ...character,
    spells: character.spells.map((spell) => {
      if (spell.id === spellId) {
        return {
          ...spell,
          used: !spell.used,
        };
      }
      return spell;
    }),
  };
};
