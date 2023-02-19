import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Recipe from "./components/Recipe";
import Modal from '@material-ui/core/Modal';
import IngredientInput from "./components/IngredientInput";

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

  const [ingredients, setIngredients] = useState ([<IngredientInput id={0}
    value={currentRecipe.ingredients} 
    handler={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
    placeholder="Ingredient"/>
   ])
  // useState([<input value={currentRecipe.ingredients}
  //   onChange={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
  //   placeholder="Ingredients"
  // />])
  const addIngredient = () => {
    var newIngredients = [...ingredients]
    newIngredients.push(<IngredientInput id={newIngredients.length}
      value={currentRecipe.ingredients} 
      handler={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
      placeholder="Ingredient"/>)
    // newIngredients.push(<input value={currentRecipe.ingredients}
    //   onChange={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
    //   placeholder="Ingredients"
    // />)
    setIngredients(newIngredients)
  }

  function handleClose(){
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <h1>YUMMA ♡</h1>
      {/* <p className="badge">
        <span>{name}</span>
      </p> */}
      <ul>
        <li>
          {recipes.map((recipe) => (
              <Recipe id={recipe._id.toString()} name={recipe.name} caption={recipe.caption} difficulty={recipe.difficulty} ingredients={recipe.ingredients} 
            steps={recipe.steps} time={recipe.time} type={recipe.type} />
          ))}
        </li>
      </ul>
      <button onClick={setIsOpen}>Upload Recipe</button>
      <form onSubmit={handleSubmitRecipe}>
        <input
          value={currentRecipe.name}
          onChange={event => setCurrentRecipe(x => ({ ...x, name: event.target.value}))}
          placeholder="Name"
        />
        <input
          value={currentRecipe.time}
          onChange={event => setCurrentRecipe(x => ({ ...x, time: event.target.value}))}
          placeholder="Estimated Time"
        />
        {/* <input
          value={currentRecipe.ingredients}
          onChange={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
          placeholder="Ingredients"
        /> */}
        {ingredients.map((i) => {return i})}
        <button sx={{width: "40px", height: "20px"}} onClick={() => addIngredient()}>add ingredient</button>
        <input
          value={currentRecipe.difficulty}
          onChange={event => setCurrentRecipe(x => ({ ...x, difficulty: event.target.value}))}
          placeholder="Difficulty"
        />
        <input
          value={currentRecipe.steps}
          onChange={event => setCurrentRecipe(x => ({ ...x, steps: event.target.value}))}
          placeholder="Steps to Make Dish"
        />
        <input
          value={currentRecipe.caption}
          onChange={event => setCurrentRecipe(x => ({ ...x, caption: event.target.value}))}
          placeholder="Share your story"
        />
        <input
          value={currentRecipe.type}
          onChange={event => setCurrentRecipe(x => ({ ...x, type: event.target.value}))}
          placeholder="Type"
        />
        <input type="submit" value="Send" disabled={ currentRecipe.name === '' || currentRecipe.time === '' || currentRecipe.ingredients === '' || currentRecipe.difficulty === '' 
          || currentRecipe.steps === '' || currentRecipe.caption === '' || currentRecipe.type === '' } 
          onClick = {handleClose}/>
      </form>
      <Modal 
      open = {isOpen}
      >
        <input />
      </Modal>
      <Modal 
      open = {isOpen}
      >
        <button sx={{width: "40px", height: "20px"}} onClick={handleClose}>close </button>
      </Modal>
    </main>
  );
}