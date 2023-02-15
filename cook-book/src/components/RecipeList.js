import { Link } from "react-router-dom";
import { useAPI } from "./context/useContext"
import "./styles/RecipeStyle.css"

const RecipeList = () => {
    const {recipes,query} = useAPI()

    return(
        <div>
            {
                recipes.filter(recipes => {
                    if(query === ''){
                        return recipes
                    } else if (recipes.title.toLowerCase().includes(query.toLowerCase())){
                        return recipes
                    }
                }).map((recipe) => {
                    return(
                      <div className="recipe-list">
                        <div className="recipe-card" key={recipe.id}>
                        <h1>{recipe.title}</h1>
                        <h2>{recipe.time}: min</h2>
                        <p>{recipe.description}</p>
                        <Link to={`/recipes/${recipe.id}`}>
                            <button className="cook-button">Cook This!</button>
                        </Link>
                        </div>
                        </div>
                    )                
                })
            }
        </div>
    )
}

export default RecipeList;