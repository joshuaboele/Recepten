import React from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../store/recipesSlice";

const AddRecipeForm = () => {
    const dispatch = useDispatch();

    const handleaddRecipe = () => {
        dispatch(
            addRecipe({
                name: "test",
                id: +new Date(),
                ingredients: ["wad", "dawdad", "wdadad"],
                description: "test"
            })
        );
    };
    return (
        <form>
            <input></input>
            <input></input>
            <input></input>
            <button onClick={handleaddRecipe}>Voeg toe</button>
        </form>
    );
};

export default AddRecipeForm;
