import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPending } from "../redux/slices/pendingSlice";
import "../styles/CreateRecipe.css"


const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [method, setMethod] = useState('');
  const [listIngredients, setListIngredients] = useState([])
  const nav = useNavigate();
  

  const url = useSelector(
    (state) => state.url.url
)
const isPending = useSelector(
    (state) => state.pending
)

const dispatch = useDispatch()


  const handleIngredients = (e) => {
    e.preventDefault()
    setListIngredients([...listIngredients,ingredients])
    setIngredients('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipe = { title, listIngredients, method, time, description};
    dispatch(setPending(true));
    fetch(url, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(recipe)
    }).then(() =>{
        dispatch(setPending(false));
        nav('/')
    })
  }

  return (
    <div className="create">
      <h2>New recipe:</h2>
      <form onSubmit={handleSubmit}>
        <label className="name">Recipe name: </label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="description">Description:</label>
        <input 
          type="text" 
          required 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="ingredients">Recipe ingredients:</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button className="submitButton" type="button" onClick={handleIngredients}>Add</button>
        <p>Current ingredients: {listIngredients.toString()}</p>
        <label>Recipe method:</label>
        <textarea
        required
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        />
        <label className="time">Cooking time (in minutes):</label>
        <input
        type="number"
        min="0"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
        { isPending && <button type="submit">Submit</button>}
        { !isPending && <button disabled>Submiting...</button>}
      </form>
    </div>
  );
}
 
export default CreateRecipe;