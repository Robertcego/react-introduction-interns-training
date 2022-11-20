import { GET_CHARACTER_DETAILS } from '.';
import axios from 'axios';

const getCharacterDetails = (id) => {
  return async (dispatch) => {
    try {
      const characterDetailsData = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`
      );
      dispatch({
        type: GET_CHARACTER_DETAILS,
        payload: characterDetailsData.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default getCharacterDetails;
