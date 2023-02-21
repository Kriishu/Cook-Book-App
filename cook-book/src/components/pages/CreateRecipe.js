import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/CreateRecipe.css"
import axios from "axios";


const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');
  const [method, setMethod] = useState('');
  const [listIngredients, setListIngredients] = useState([])
  const nav = useNavigate();
  


const isPending = useSelector(
    (state) => state.pending
)




  const handleIngredients = (e) => {
    e.preventDefault()
    setListIngredients([...listIngredients,ingredients])
    setIngredients('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3000/recipes", {
            title,
            listIngredients,
            method,
            time,
        })
        nav('/')
    } catch (error) {
        console.log(error)
    }
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