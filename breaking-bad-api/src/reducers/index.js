import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_DETAILS,
} from '../actions/index';

const initialState = {
  characters: [],
  character: [],
  characterDetails: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    case GET_CHARACTER: {
      return {
        ...state,
        character: action.payload,
      };
    }
    case GET_CHARACTER_DETAILS: {
      return {
        ...state,
        characterDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
