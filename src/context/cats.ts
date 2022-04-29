import React from "react";

interface FavCatsContextInterface {
  favCats: string[];
  setFavCats: (favCats: string[]) => void;
}

export const FavCatsContext = React.createContext({
  favCats: [],
  setFavCats: () => {
    return;
  },
} as FavCatsContextInterface);
