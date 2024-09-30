import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoriteSlice } from "./favoriteSlice";
import { NotificationSliceType, createNotificationlice } from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationlice(...a)
})))