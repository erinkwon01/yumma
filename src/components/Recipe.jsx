import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/Messages.module.css';

function Recipe(props) {
  const {
    id, name, ingredients, time, caption, steps, difficulty, type
  } = props;

//   const update = () => {
//     updatePinned(id, !pinned);
//   };

  return (
    // <div className={pinned ? styles.pinnedmessage : styles.message}>
    <div key={id}>
      <h5>
        {name}
      </h5>
      <p>
        Estimated Time: {time}
        <br />
        Ingredients: {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        <br />
        Difficulty: {difficulty}
        <br />
        Steps: {steps.map((step, index) =>  <li key={index}>{index+1}. {step}</li>)} 
        <br />
        Caption: {caption}
        <br />
        Type: {type}
      </p>
    </div>
  );
}

//<button type="button" className={pinned ? styles.pinnedbutton : styles.button} onClick={update}>{pinned ? '❗️📌 UNPIN' : '📌 PIN' }</button>

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  difficulty: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Recipe;