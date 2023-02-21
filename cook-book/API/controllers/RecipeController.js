import Recipe from "../models/RecipeModel.js";
 
export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveRecipe = async (req, res) => {
    const recipe = new Recipe(req.body);
    try {
        const insertedRecipe = await recipe.save();
        res.status(201).json(insertedRecipe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.deleteOne({_id:req.params.id});
        res.status(200).json(deletedRecipe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}