import { GET_CHARACTER } from '.';
import axios from 'axios';

const getCharacter = (character) => {
  return async (dispatch) => {
    try {
      const characterData = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${character}`
      );
      dispatch({
        type: GET_CHARACTER,
        payload: characterData.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default getCharacter;
