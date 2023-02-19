import React from 'react';
import PropTypes from 'prop-types';
import { height } from '@mui/system';
// import styles from "./index.css";
// import styles from '../styles/Messages.module.css';

function Recipe(props) {
  const {
    id, name, ingredients, time, caption, steps, difficulty, type
  } = props;


  console.log(ingredients);
  return (
    <main>
      <div className='recipe'>
        <div key={id}>
          <h1 style={{
              fontFamily: 'Gloock',
              fontStyle: 'normal',
              letterSpacing: '0.05em',
              fontWeight: '700px',
              fontSize: '35px',
              alignItems: 'center',
              color: '#000000',
              backgroundColor: '#EFD5B2',
              borderRadius: '20%',
              }}>
            {name}
          </h1>
          <p>
            <h3 style={{
              fontFamily: 'Manrope',
              fontWeight: '700px',
              fontSize: '20px',
              alignItems: 'center',
              color: '#000000',
              marginLeft: '18px'
            }}>
            Estimated Time:
            </h3> 
            <text style ={{ fontFamily: 'Verdana', marginLeft: '18px'}}>
            {time}
            </text>
            <br />
            <div className='ingredients-title-box'>
              <div className='ingredients-title'
              >
                <h3 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '700px',
                  fontSize: '20px',
                  alignItems: 'center',
                  color: '#000000',
                  marginTop: '22px',
                  marginLeft: '18px'
                }}>Ingredients: </h3>
              </div>
            </div>
            <div className='ingredients-list-outer-box'>
              <div className='ingredients-list-inner-box'>
                <div className='ingredients-list'>
                  {ingredients.map((ingredient, index) => <li key={index}>{ "🍤 " + ingredient}</li>)}
                </div>
              </div>
            </div>
            <br />
            <h3 style={{
              fontFamily: 'Manrope',
              fontWeight: '700px',
              fontSize: '20px',
              alignItems: 'center',
              color: '#000000',
              marginLeft: '18px'
            }}>
            Difficulty:
            </h3> 
            <text style ={{ fontFamily: 'Manrope', marginLeft: '18px'}}>
            {difficulty}
            </text>
            <br />
            <h3 style={{
              fontFamily: 'Manrope',
              fontWeight: '700px',
              fontSize: '20px',
              alignItems: 'center',
              color: '#000000',
              marginLeft: '18px',
              marginTop: '20px',
            }}>
            Steps:
            </h3> 
            {steps.map((step, index) =>  <li key={"step" + index}>{index+1}. {step}</li>)} 
            <br />
            <h3 style={{
              fontFamily: 'Manrope',
              fontWeight: '700px',
              fontSize: '20px',
              alignItems: 'center',
              color: '#000000',
              marginLeft: '18px',
            }}>
            Caption:
            </h3>
            <text style ={{ fontFamily: 'Verdana', marginLeft: '18px'}}>
            {caption}
            </text>
            <br />
            <h3 style={{
              fontFamily: 'Manrope',
              fontWeight: '700px',
              fontSize: '20px',
              alignItems: 'center',
              color: '#000000',
              marginLeft: '18px',
              marginTop: '30px',
            }}>
            Type:
            </h3>
            <text style ={{ fontFamily: 'Manrope', marginLeft: '18px'}}>
            {type}
            </text>
          </p>
          <br />
        </div>
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