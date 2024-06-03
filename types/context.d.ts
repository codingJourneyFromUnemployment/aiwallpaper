import { Dispatch } from "react";

interface State {
  description: string;
  submitting: boolean;
  wallpaper: Wallpaper | null;
}


type Action =
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_SUBMITTING"; payload: boolean }
  | { type: "SET_WALLPAPER"; payload: Wallpaper | null };

interface AppContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export { State, Action, AppContextProps };