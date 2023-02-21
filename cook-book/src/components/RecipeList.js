import { Link } from "react-router-dom";
import "./styles/RecipeStyle.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"

const RecipeList = () => {
    const [ recipes, setRecipes] = useState([])



    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        const response = await axios.get("http://localhost:3000/recipes")
        setRecipes(response.data)
    }

    const { loading } = useSelector((state) => state.recipe)
    const query = useSelector(
        (state) => state.recipeFilter.query
    )


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
                        <div className="recipe-card" key={recipe._id}>
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <h2 className="recipe-time">{recipe.time}: min</h2>
                        <p className="recipe-method">{recipe.method}</p>
                        <Link to={`/recipes/${recipe._id}`}>
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