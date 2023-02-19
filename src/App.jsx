import { useState , useEffect} from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Recipe from "./components/Recipe";
import Modal from '@material-ui/core/Modal';
import IngredientInput from "./components/IngredientInput";
import logo from "./logo.png";

export default function App() {
  
  const recipes = useQuery("listRecipes") || [];

  const [currentRecipe, setCurrentRecipe] = useState({
    caption: '',
    difficulty: '',
    ingredients: [],
    name: '',
    steps: [],
    time:'',
    type: ''
  });
  const submitRecipe = useMutation("submitRecipe");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSubmitRecipe(event) {
    event.preventDefault();
    await submitRecipe(currentRecipe.caption, currentRecipe.difficulty, currentRecipe.ingredients, 
      currentRecipe.name, currentRecipe.steps, currentRecipe.time, currentRecipe.type, name);
    setCurrentRecipe({caption: '', difficulty: '', ingredients: [], name: '', steps:[], time: '', type: ''});
  }


  const [isOpen, setIsOpen] = useState(false);

  // TODO: prevent submit handler getting called

  const [ingredientInputs, setIngredientInputs] = useState ([<IngredientInput id={0}
    value={currentRecipe.ingredients[0]} 
    handler={event => setCurrentRecipe(x => {
      x.ingredients[0] = event.target.value;
      return x;
    })
      }
    placeholder="ex. Rice Paper"/>
   ])

   const [stepInputs, setStepInputs] = useState ([<IngredientInput id={0} 
    value={currentRecipe.steps[0]}
    handler={event => setCurrentRecipe(x => {
      x.steps[0] = event.target.value;
      return x;
    })}
    placeholder="ex. Wet rice paper."/>
   ])

   const addStep = () => {
    var newSteps = [...stepInputs];
    const index = newSteps.length;
    newSteps.push(<IngredientInput id={index}
      value={currentRecipe.steps[index]}
      handler={event => {
        event.preventDefault();
        setCurrentRecipe(x => {
          x.steps[index] = event.target.value;
          return x;
        });
      }}
      placeholder="ex. Wet rice paper." />)
    setStepInputs(newSteps);
   }

  // useState([<input value={currentRecipe.ingredients}
  //   onChange={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
  //   placeholder="Ingredients"
  // />])
  const addIngredient = () => {
    var newIngredients = [...ingredientInputs];
    const index = newIngredients.length;
    newIngredients.push(<IngredientInput id={index}
      value={currentRecipe.ingredients[index]} 
      handler={event => {
        event.preventDefault();
        setCurrentRecipe(x => {
          x.ingredients[index] = event.target.value;
          return x;
          });
      }}
      placeholder="ex. Rice Paper"/>)
    setIngredientInputs(newIngredients)
  }

  function handleClose(){
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
  }, [setCurrentRecipe]);

  useEffect(() => {
  }, [setCurrentRecipe]);

  return (
    <div style={{
      backgroundColor: '#42270D',
    }}>
      <main style={{backgroundColor: '#8E9B90',}}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <img src={logo} alt='YUMMA logo'/>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button onClick={handleClose} style={{
            fontFamily: 'Manrope',
            marginTop: '10px',
            marginBottom: '0px',
          }}>Upload Recipe</button>
          <Modal 
            style={{ 
              backgroundColor: '#752711',
              maxHeight: '80%',
              maxWidth: '20%',
              overflow: 'scroll',
              borderRadius: '10px',
              marginLeft: '40%',
              marginTop: '5%',
              display: 'flex',
              justifyContent: 'center',
              }}
            open = {isOpen}
          >
              <form>
              <button style = {{
                marginTop: '8px',
                marginLeft: '-26px',
                marginBottom: '-2px',
                backgroundColor: '#752711',
              }}
                onClick ={handleClose}>
                x
              </button>
              <h2 style={{
                color: 'white',
              }}>Submit a Recipe</h2>
            <label htmlFor="name">Name of Dish</label>
            <input
              value={currentRecipe.name}
              onChange={event => setCurrentRecipe(x => ({ ...x, name: event.target.value}))}
              placeholder="ex. Spring Roll"
            />
            <br></br>
            <label htmlFor="time">Estimated Time</label>
            <input
              value={currentRecipe.time}
              onChange={event => setCurrentRecipe(x => ({ ...x, time: event.target.value}))}
              placeholder="ex. 15 minutes"
            />
            <label htmlFor="ingredients">Ingredients</label>
            {ingredientInputs.map((i) => {return i})}
            <button sx={{width: "40px", height: "20px"}} onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              addIngredient();
              }}>Add Ingredient</button>
              <br/>
            <label htmlFor="difficulty">Difficulty Level</label>
            <input
              id = "difficulty"
              value={currentRecipe.difficulty}
              onChange={event => setCurrentRecipe(x => ({ ...x, difficulty: event.target.value}))}
              placeholder="ex. Easy"
            />
            <label htmlFor="steps">Steps</label>
            {stepInputs.map((i) => {return i})}
            <button sx={{width: "40px", height: "20px"}} onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              addStep();
              }}>Add Step</button>
            <label htmlFor="caption">Caption</label>
            <input
              id = "caption"
              value={currentRecipe.caption}
              onChange={event => setCurrentRecipe(x => ({ ...x, caption: event.target.value}))}
              placeholder="Share your story!"
            />
            <br></br>
            <label htmlFor="type">Type</label>
            <input
              id = "type"
              value={currentRecipe.type}
              onChange={event => setCurrentRecipe(x => ({ ...x, type: event.target.value}))}
              placeholder="ex. Vietnamese"
            />
            <br></br>
            <input type="submit" value="Submit" disabled={ currentRecipe.name === '' || currentRecipe.time === '' || currentRecipe.ingredients === '' || currentRecipe.difficulty === '' 
              || currentRecipe.steps === '' || currentRecipe.caption === '' || currentRecipe.type === '' } 
              onClick = {handleSubmitRecipe}/>
            <input type="submit" value="Cancel"
              onClick = {handleClose}/>
          </form>
        </Modal >
        </div>
        <ul>
            {recipes.map((recipe) => (
                <Recipe id={recipe._id.toString()} name={recipe.name} caption={recipe.caption} difficulty={recipe.difficulty} ingredients={recipe.ingredients} 
              steps={recipe.steps} time={recipe.time} type={recipe.type} />
            ))}
        </ul>
      </main>
    </div>
  );
}