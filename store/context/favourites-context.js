import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
})

function FavouritesContextProvider({children}) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([])

  function addFavourite(id) {
    setFavouriteMealIds([...favouriteMealIds, id])
  }

  function removeFavourite(id) {
    setFavouriteMealIds(favouriteMealIds.filter(mealId => mealId !== id))
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  }

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider