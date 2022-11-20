import { GET_CHARACTERS } from '.';
import axios from 'axios';

const getCharacters = () => {
  return async (dispatch) => {
    try {
      const charactersData = await axios.get(
        'https://www.breakingbadapi.com/api/characters'
      );
      // console.log(charactersData.data);
      dispatch({
        type: GET_CHARACTERS,
        payload: charactersData.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default getCharacters;
