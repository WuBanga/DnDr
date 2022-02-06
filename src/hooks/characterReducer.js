export const characterActionTypes = {
  SET: 'set',
  PREPARE: 'prepare',
  UNPREPARE: 'unprepare',
  TOGGLE_USED: 'toggleUsed',
  RESET_USED: 'resetUsed',
  SET_PREPARED: 'setPrepared',
};

export const characterReducer = (state, action) => {
  switch (action.type) {
    case characterActionTypes.SET:
      return action.character;
    case characterActionTypes.SET_PREPARED:
      return setPrepared(state, action.spellsList);
    case characterActionTypes.PREPARE:
      return prepare(state, action.spell);
    case characterActionTypes.UNPREPARE:
      return unprepare(state, action.spellIndex);
    case characterActionTypes.TOGGLE_USED:
      return toggleUsed(state, action.spellIndex);
    case characterActionTypes.RESET_USED:
      return resetUsed(state);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

const setPrepared = (character, spellsList) => {
  return {
    ...character,
    preparedSpells: spellsList.map((spell) => {
      return {
        name: spell,
        used: false,
      };
    }),
  };
};

const resetUsed = (character) => {
  return {
    ...character,
    preparedSpells: character.preparedSpells.map((spell) => {
      return {
        ...spell,
        used: false,
      };
    }),
  };
};

const toggleUsed = (character, spellIndex) => {
  return {
    ...character,
    preparedSpells: character.preparedSpells.map((spell, index) => {
      if (index === spellIndex) {
        return {
          ...spell,
          used: !spell.used,
        };
      }
      return spell;
    }),
  };
};

const prepare = (character, spell) => {
  return {
    ...character,
    preparedSpells: character.preparedSpells.concat({
      name: spell,
      used: false,
    }),
  };
};

const unprepare = (character, spellIndex) => {
  return {
    ...character,
    preparedSpells: character.preparedSpells.filter(
      (_, index) => index !== spellIndex
    ),
  };
};
