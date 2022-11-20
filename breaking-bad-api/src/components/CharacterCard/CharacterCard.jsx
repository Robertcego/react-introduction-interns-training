import React from 'react';
import styles from './CharacterCard.module.css';

import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  console.log(character);

  const imagePlaceholder = 'https://via.placeholder.com/215x300?text=No+Image';

  if (character.length === 0) {
    return <h1>Loading...</h1>;
  }

  // character[13].img = imagePlaceholder;
  // character[16].img = imagePlaceholder;
  // character[38].img = imagePlaceholder;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.characterContainer}>
        {character.map((character) => {
          return (
            <div className={styles.characterCard} key={character.char_id}>
              <div className={styles.container}>
                <h3>{character.name}</h3>
              </div>
              <Link to={`/character-details/${character.char_id}`}>
                <img
                  src={character.img || imagePlaceholder}
                  alt={character.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.currentTarget.src = imagePlaceholder;
                  }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterCard;
