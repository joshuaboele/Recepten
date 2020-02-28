import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
    name: "recipes",
    initialState: [
        {
            name: "curry",
            id: 0,
            ingredients: ["Groenten", "Noodles", "Kokosmelk"],
            description: "Kook het zo...."
        }
    ],
    reducers: {
        addRecipe(state, action) {
            state.push(action.payload);
        },
        deleteRecipe(state, action) {
            state.splice(
                state.findIndex(recipe => recipe.id === action.payload),
                1
            );
        }
    }
});

export const { addRecipe, deleteRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
