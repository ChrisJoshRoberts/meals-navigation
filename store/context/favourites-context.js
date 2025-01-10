import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
})

function FavouritesContextProvider({children}) {
  

  return (
    <FavouritesContext.Provider value={{}}>
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider