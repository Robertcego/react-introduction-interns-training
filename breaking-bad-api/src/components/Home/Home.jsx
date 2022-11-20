import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../actions/index';
import CharacterCard from '../CharacterCard/CharacterCard';

import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      <CharacterCard character={characters} />
    </div>
  );
};

export default Home;
