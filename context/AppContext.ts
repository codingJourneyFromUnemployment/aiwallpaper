import { createContext, useReducer } from "react";
import { Wallpaper } from "@/types/wallpaper";
import { State, Action, AppContextProps } from "@/types/context";
import App from "next/app";

const initialState : State = {
  description: "",
  submitting: false,
  wallpaper: null,
};

const reducer = (state: State, action: Action) => {
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

const AppContext = createContext<AppContextProps | null >(null)

const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider };

