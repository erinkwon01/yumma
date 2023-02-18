import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Recipe from "./components/Recipe";
import Modal from '@material-ui/core/Modal';

export default function App() {
  const messages = useQuery("listMessages") || [];

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage(newMessageText, name);
  }

  const [isOpen, setIsOpen] = useState(false);

  // const recipes = useQuery("listRecipes"); 

  // const [currentRecipe, setCurrentRecipe] = useState({
  //   caption: '',
  //   difficulty: '',
  //   ingredients: '',
  //   name: '',
  //   steps:'',
  //   time:''
  // });

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
      <form onSubmit={handleSendMessage}>
        <input
          value={newMessageText}
          onChange={event => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
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
