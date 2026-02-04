import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // initial state
  recipes: [],

  // action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // action: replace the whole recipe list
  setRecipes: (recipes) => set({ recipes }),
}));
