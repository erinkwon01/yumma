import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Recipe from "./components/Recipe";
import Modal from '@material-ui/core/Modal';

export default function App() {
  const messages = useQuery("listRecipes") || [];

  const [currentRecipe, setCurrentRecipe] = useState({
    caption: '',
    difficulty: '',
    ingredients: '',
    name: '',
    steps:'',
    time:'',
    type: ''
  });
  const submitRecipe = useMutation("submitRecipe");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSubmitRecipe(event) {
    event.preventDefault();
    await submitRecipe(currentRecipe.caption, currentRecipe.difficulty, currentRecipe.ingredients, 
      currentRecipe.name, currentRecipe.steps, currentRecipe.time, currentRecipe.type, name);
    setCurrentRecipe({caption: '', difficulty: '', ingredients: '', name: '', steps:'', time: '', type: ''}); 
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
      {/* <Recipe caption="Inspired by my mom. "
  difficulty="Easy"
  ingredients: ["Seaweed", "Rice", "Vegetables", "Sesame oil"],
  name="Kimbap",
  steps: ["Cook rice.", "Put on seaweed.", "Put veggies in.", "Roll in."],
  time: "3-5 minutes",
  type: "Korean",></Recipe> */}
      <h1>Convex Chat</h1>
      <p className="badge">
        <span>{name}</span>
      </p>
      <ul>
        {messages.map(message => (
          <li key={message._id.toString()}>
            <span>{message.author}:</span>
            <span>{message.body}</span>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmitRecipe}>
        <input
          value={currentRecipe.name}
          onChange={event => setCurrentRecipe(x => ({ ...x, name: event.target.value}))}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={false} /> {/*when should the button be disabled, is there a name, ingredients, etc.*/}
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
