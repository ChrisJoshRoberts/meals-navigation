
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
// import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const FavouriteScreen = ({navigation}) => {
  // const FavouriteMealsContext = useContext(FavouritesContext);
  const FavouriteMealsContext = useSelector((state) => state.favoriteMeals.ids)

  const favMeals = MEALS.filter(meal => FavouriteMealsContext.includes(meal.id))

  return (
    <MealsList items={favMeals} nav={navigation}/>
  )
}

export default FavouriteScreen