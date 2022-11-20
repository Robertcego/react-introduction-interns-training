import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacter } from '../../actions';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state);

  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(getCharacter(e.target.value));
  };

  console.log(character);

  return (
    <div className={styles.mainContainer}>
      <fieldset>
        <legend>Search</legend>
        <input onChange={handleOnChange} type='text' name='' id='' />
      </fieldset>
      <div>
        <CharacterCard character={character} />
      </div>
    </div>
  );
}
