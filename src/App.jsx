import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Recipe from "./components/Recipe";
import Modal from '@material-ui/core/Modal';

export default function App() {
  const recipes = useQuery("listRecipes") || [];
  // console.log(recipes);

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

  // const recipes = useQuery("listRecipes"); 

  // const makeRecipe = useMutation("sendRecipe"); 

  // function onUploadClick(){

  // }

  // async function handleSubmitRecipe(event){
  //   event.preventDefault(); 
  //   setCurrentRecipe({
  //     caption: "",
  //     difficulty: "",
  //     ingredients: "",
  //     name: "",
  //     steps:"",
  //     time:"",
  //   })
  //   await makeRecipe(currentRecipe);
  //   console.log(currentRecipe);
  // }

  function handleClose(){
    setIsOpen(!IsOpen);
  }

  return (
    <main>
      {/* <Recipe id='1234567' caption="Inspired by my mom. " difficulty="Easy" ingredients={["Seaweed", "Rice", "Vegetables", "Sesame oil"]} name="Kimbap"
      steps={["Cook rice.", "Put on seaweed.", "Put veggies in.", "Roll in."]} time="3-5 minutes" type="Korean" /> */}
      <h1>Convex Chat</h1>
      <p className="badge">
        <span>{name}</span>
      </p>
      {/* Replace below with Galen's recipe component */}
      <ul>
        <li>
          {recipes.map((recipe) => (
            <Recipe id={recipe._id.toString()} name={recipe.name} caption={recipe.caption} difficulty={recipe.difficulty} ingredients={recipe.ingredients} 
            steps={recipe.steps} time={recipe.time} type={recipe.type} />
          ))}
        </li>
      </ul>
      {/* Replace above with Galen's recipe component */}
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
        <input
          value={currentRecipe.ingredients}
          onChange={event => setCurrentRecipe(x => ({ ...x, ingredients: event.target.value}))}
          placeholder="Ingredients"
        />
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
          || currentRecipe.steps === '' || currentRecipe.caption === '' || currentRecipe.type === '' } />
      </form>
      <button onClick={setIsOpen}>Open Modal</button>
      <Modal 
      open = {isOpen}
      >
          <input></input>
      </Modal>
    </main>
  );
}
