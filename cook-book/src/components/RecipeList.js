import { Link } from "react-router-dom";
import "./styles/RecipeStyle.css"
import { getRecipes } from "./redux/slices/recipeSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const RecipeList = () => {
    const { recipes, loading } = useSelector((state) => state.recipe)
    const query = useSelector(
        (state) => state.recipeFilter.query
    )
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    if(loading) {
        return <h2>Loading...</h2>
    }

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