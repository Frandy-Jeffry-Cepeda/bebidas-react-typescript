import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipesSliceType = {
    categories: Category[]
    fetchCagegories: () => Promise<void>

}

export const createRecipesSlice : StateCreator<RecipesSliceType> = () => ({
    categories: [],
    fetchCagegories: async () => {
        getCategories()
    }
})