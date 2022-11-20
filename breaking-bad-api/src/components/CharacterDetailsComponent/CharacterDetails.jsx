import React, { useEffect } from 'react';
import styles from './CharacterDetails.module.css';

import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacterDetails } from '../../actions';

export default function CharacterDetails() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { characterDetails } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCharacterDetails(id));
  }, []);

  if (characterDetails.length === 0) {
    return <h1>Loading...</h1>;
  }

  console.log(characterDetails[0]);

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.detailsTitle}>Character Details</h1>
      <div className={styles.mainContainer}>
        <div>
          <img src={characterDetails[0]?.img} alt={characterDetails[0]?.name} />
        </div>
        <div>
          <h2>Name: {characterDetails[0]?.name}</h2>
          <h4>Nickname: {characterDetails[0]?.nickname}</h4>
          {characterDetails[0]?.occupation.map((occupation, id) => {
            return <h4 key={id}>Occupation: {occupation}</h4>;
          })}
          <h4>Status: {characterDetails[0]?.status}</h4>
          <h4>Portrayed by: {characterDetails[0]?.portrayed}</h4>
          <br />
          <Link to='/'>Back home...</Link>
        </div>
      </div>
    </div>
  );
}
