import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipe } from "./store/recipesSlice";
import "./App.css";
import AddRecipeForm from "./components/addRecipeForm";

function App() {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const handleDeleteRecipe = id => {
        dispatch(deleteRecipe(id));
    };
    return (
        <div className="App">
            <ul>
                {recipes.map(({ id, name, ingredients, description }) => {
                    return (
                        <li key={id}>
                            {name}
                            <ul>
                                {ingredients.map(ingredient => (
                                    <li>{ingredient}</li>
                                ))}
                            </ul>
                            {description}
                            <button
                                onClick={() => {
                                    handleDeleteRecipe(id);
                                }}
                            >
                                Delete
                            </button>
                            }
                        </li>
                    );
                })}
            </ul>
            <AddRecipeForm />
        </div>
    );
}

export default App;
