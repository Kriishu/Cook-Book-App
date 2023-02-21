import express from "express";
import { 
    getRecipes, 
    getRecipeById,
    saveRecipe,
    updateRecipe,
    deleteRecipe
} from "../controllers/RecipeController.js";
 
const router = express.Router();
 
router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeById);
router.post('/recipes', saveRecipe);
router.patch('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);
 
export default router;