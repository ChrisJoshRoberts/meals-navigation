
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { useEffect } from "react"
import MealsList from "../components/MealsList/MealsList"

const MealsOverviewScreen = ({ route, navigation }) => {

  const catId =  route.params.categoryId
  const catTitle = route.params.title

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId)
  })

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title
    navigation.setOptions({
      title: categoryTitle
    })
  },[catId, navigation])

  return (
    <MealsList items={displayedMeals} nav={navigation}/>
  )
}
export default MealsOverviewScreen