import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/RecipeDetails.css'


const RecipeDetails = () => {

    const [recipe, setRecipe] = useState([])
    const [listIng, setListIng] = useState([])

    const nav = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3000/recipes/${id}`);
        setRecipe(response.data)
        setListIng(response.data.listIngredients)
      };

      const handleClick = async () => {
        try {
            await axios.delete(`http://localhost:3000/recipes/${id}`);
            nav("/")
          } catch (error) {
            console.log(error);
          }
        };

   
 
    return ( 
        <div className="recipe-container">
            
                <article>
                    <h1>{recipe.title}</h1>
                    <p className="recipe-ingredienants">
                    Ingrediants: {listIng.join(", ")}</p>
                    <h1>How to cook</h1>
                    <div className="recipe-description">{recipe.method}</div>
                    <p>Time to cook: {recipe.time} minutes</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
        </div>
     );
}
 
export default RecipeDetails;