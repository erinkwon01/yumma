import React from 'react';
import PropTypes from 'prop-types';
// import styles from "./index.css";
// import styles from '../styles/Messages.module.css';

function Recipe(props) {
  const {
    id, name, ingredients, time, caption, steps, difficulty, type
  } = props;

//   const update = () => {
//     updatePinned(id, !pinned);
//   };
  console.log(ingredients);
  return (
    <main>
      <div key={id}>
        <h1>
          {name}
        </h1>
        <p>
          Estimated Time: {time}
          <br />
          <div className='ingredients-title-box'>
            <div className='ingredients-title'>
              Ingredients: 
            </div>
          </div>
          <div className='ingredients-list-outer-box'>
            <div className='ingredients-list-inner-box'>
              <div className='ingredients-list'>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
              </div>
            </div>
          </div>
          <br />
          Difficulty: {difficulty}
          <br />
          Steps: {steps.map((step, index) =>  <li key={"step" + index}>{index+1}. {step}</li>)} 
          <br />
          Caption: {caption}
          <br />
          Type: {type}
        </p>
        <br />
      </div>
    </main>
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


// import React from 'react';
// import PropTypes from 'prop-types';
// // import styles from '../styles/Messages.module.css';

// function Recipe(props) {
//   const {
//     id, name, ingredients, time, caption, steps, difficulty, type
//   } = props;

// //   const update = () => {
// //     updatePinned(id, !pinned);
// //   };

//   return (
//     // <div className={pinned ? styles.pinnedmessage : styles.message}>
//     <div key={id}>
//       <h1>
//         {name}
//       </h1>
//       <p>
//         Estimated Time: {time}
//         <br />
//         Ingredients: {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
//         <br />
//         Difficulty: {difficulty}
//         <br />
//         Steps: {steps.map((step, index) =>  <li key={index}>{index+1}. {step}</li>)} 
//         <br />
//         Caption: {caption}
//         <br />
//         Type: {type}
//       </p>
//     </div>
//   );
// }

// //<button type="button" className={pinned ? styles.pinnedbutton : styles.button} onClick={update}>{pinned ? '❗️📌 UNPIN' : '📌 PIN' }</button>

// Recipe.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   ingredients: PropTypes.array.isRequired,
//   time: PropTypes.string.isRequired,
//   caption: PropTypes.string.isRequired,
//   steps: PropTypes.array.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired
// };

// export default Recipe;