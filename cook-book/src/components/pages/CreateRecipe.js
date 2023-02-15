import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useAPI } from "../context/useContext";

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [method, setMethod] = useState('');
  const [listIngredients, setListIngredients] = useState([])
  const nav = useNavigate();
  const {isPending, setIsPending, url} = useAPI();


  const handleIngredients = (e) => {
    e.preventDefault()
    setListIngredients([...listIngredients,ingredients])
    setIngredients('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipe = { title, listIngredients, method, time, description};
    setIsPending(true);
    fetch(url, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(recipe)
    }).then(() =>{
        setIsPending(false);
        nav('/')
    })
  }

  return (
    <div className="create">
      <h2>New recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe name: </label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <input 
          type="text" 
          required 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Recipe ingredients:</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="button" onClick={handleIngredients}>Add</button>
        <p>Current ingredients: {listIngredients.toString()}</p>
        <label>Recipe method:</label>
        <textarea
        required
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        />
        <label>Cooking time (in minutes):</label>
        <input
        type="number"
        min="0"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button disabled>Submiting...</button>}
      </form>
    </div>
  );
}
 
export default CreateRecipe;