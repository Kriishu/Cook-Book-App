import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../data/Fetch'; 
import { useSelector } from "react-redux";
import '../styles/RecipeDetails.css'


const RecipeDetails = () => {

    const nav = useNavigate()
    const { id } = useParams()

    const url = useSelector(
        (state) => state.url.url
    )

    const { data: recipe, error, isPending } = useFetch(url + id);

   
 
    return ( 
        <div className="recipe-container">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { recipe && (
                <article>
                    <h1>{recipe.title}</h1>
                    <p className="recipe-ingredienants">
                    Ingrediants: {recipe.listIngredients.join(',')}</p>
                    <h1>How to cook</h1>
                    <div className="recipe-description">{recipe.method}</div>
                    <p>Time to cook: {recipe.time} minutes</p>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;