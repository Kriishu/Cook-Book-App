import mongoose from "mongoose";
 
const Recipe = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    listIngredients:{
        type: Array,
        required: true
    },
    method:{
        type: String,
        required: true
    },
    time:{
        type: Number,
        required: true
    }
});
 
export default mongoose.model('Recipes', Recipe);