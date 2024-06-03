import { createContext, useReducer } from "react";
import { Wallpaper } from "@/types/wallpaper";

const initialState = {
  description: "",
  submitting: false,
  wallpaper: null,
};

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_SUBMITTING":
      return { ...state, submitting: action.payload };
    case "SET_WALLPAPER":
      return { ...state, wallpaper: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext(null);

