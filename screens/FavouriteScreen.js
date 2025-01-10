
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';

const FavouriteScreen = ({navigation}) => {
  const FavouriteMealsContext = useContext(FavouritesContext);

  const favMeals = MEALS.filter(meal => FavouriteMealsContext.ids.includes(meal.id))

  return (
    <MealsList items={favMeals} nav={navigation}/>
  )
}

export default FavouriteScreen