import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";
import favouriteReducer from "../reducers/favourites";

const combinedReducer = combineReducers({
    search: searchReducer,
    favourite: favouriteReducer,
});

const store = configureStore({
    reducer: combinedReducer,
});

export default store;
