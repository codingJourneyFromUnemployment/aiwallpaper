import { createContext, Dispatch, useReducer, ReactNode } from "react";
import { State } from "@/types/context";
import { initialState, reducer } from "./reducer";

// Create a context with the initial state and the reducer(placeholder)
const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

// create a provider for the context
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };



