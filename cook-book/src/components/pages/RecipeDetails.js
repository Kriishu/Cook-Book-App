import {useParams } from "react-router-dom";
import { useAPI } from "../context/Context";
import Fetch from "../data/Fetch";
import "../styles/RecipeDetails.css"
const RecipeDetails = () => {
    const {id} = useParams()
    const {url} = useAPI()
    const {data: recipe, error, isPending} = Fetch(url + id)

    return (
        <div className="recipe-details">
            {isPending &&<div>Loading...</div>}
            {error &&<div>{error}</div>}
            {recipe && (
                <article className="recipe-container">
                    <h1 className="recipe-name">Name of Recipe: {recipe.title}</h1>
                    <h2 className="recipe-time">Time to Cook: {recipe.time} minutes.</h2>
                    <p className="recipe-method">How to Cook: {recipe.method}</p>
                    <div className="recipe-description">About the Recipe: {recipe.description}</div>
                    <div className="recipe-ingredienants">What you need for the Recipe: {recipe.listIngredients && recipe.listIngredients.join(', ') }</div>
                    
                    

                </article>
            )}
        </div>
    );
}

export default RecipeDetails;