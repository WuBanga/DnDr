export const characterActionTypes = {
  SET: 'set',
  TOGGLE_USED: 'toggleUsed',
  RESET_USED: 'resetUsed',
  TOGGLE_PREPARED: 'togglePrepared',
  UPDATE_HITS: 'updateHits',
  UPDATE_EXTRA_HITS: 'updateExtraHits',
  UPDATE_PLATINUM: 'updatePlatinum',
  UPDATE_GOLD: 'updateGold',
  UPDATE_ELECTRUM: 'updateElectrum',
  UPDATE_SILVER: 'updateSilver',
  UPDATE_COPPER: 'updateCopper',
  UPDATE_EXPERIENCE: 'updateExperience',
  UPDATE_LEVEL: 'updateLevel',
  UPDATE_COMMENT: 'updateComment',
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
    case characterActionTypes.UPDATE_PLATINUM:
      return updatePlatinum(state, action.platinum);
    case characterActionTypes.UPDATE_GOLD:
      return updateGold(state, action.gold);
    case characterActionTypes.UPDATE_ELECTRUM:
      return updateElectrum(state, action.electrum);
    case characterActionTypes.UPDATE_ELECTRUM:
      return updateSilver(state, action.silver);
    case characterActionTypes.UPDATE_ELECTRUM:
      return updateCopper(state, action.copper);
    case characterActionTypes.UPDATE_EXPERIENCE:
      return updateExperience(state, action.experience);
    case characterActionTypes.UPDATE_LEVEL:
      return updateLevel(state, action.level);
    case characterActionTypes.UPDATE_COMMENT:
      return updateComment(state, action.comment);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

const updateComment = (character, comment) => {
  return {
    ...character,
    comment: comment,
  };
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

const updatePlatinum = (character, platinum) => {
  return {
    ...character,
    platinum: platinum,
  };
};

const updateGold = (character, gold) => {
  return {
    ...character,
    gold: gold,
  };
};

const updateElectrum = (character, electrum) => {
  return {
    ...character,
    electrum: electrum,
  };
};

const updateSilver = (character, silver) => {
  return {
    ...character,
    silver: silver,
  };
};

const updateCopper = (character, copper) => {
  return {
    ...character,
    copper: copper,
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
