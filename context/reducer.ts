import { State } from "@/types/context";


const initialState: State = {
  wallpaperState: null,
  wallpaperListState: null,
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "setwallpaper":{
      return {
        ...state,
        wallpaperState: action.wallpaper,
      };
    }
    case "setwallpaperlist":{
      return {
        ...state,
        wallpaperListState: action.wallpaperList,
      };
    }
  }
}

export { initialState, reducer };




