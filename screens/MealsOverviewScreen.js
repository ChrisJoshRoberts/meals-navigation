import { StyleSheet, Text, View, FlatList } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealsCard from "../components/MealsCard"
import { useEffect } from "react"

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

  const renderMealItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealDetail', {
        mealId: itemData.item.id,
        title: itemData.item.title,
        imageUrl: itemData.item.imageUrl,
        duration: itemData.item.duration,
        complexity: itemData.item.complexity,
        affordability: itemData.item.affordability,
        ingredients: itemData.item.ingredients,
        steps: itemData.item.steps,
        isVegan: itemData.item.isVegan,
        isVegetarian: itemData.item.isVegetarian,
        isGlutenFree: itemData.item.isGlutenFree,
        isLactoseFree: itemData.item.isLactoseFree
      })
    }
    return (
    <MealsCard 
      title={itemData.item.title} 
      imgUrl={itemData.item.imageUrl}
      complexity={itemData.item.complexity}
      duration={itemData.item.duration}
      onPress={pressHandler}
    /> 
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.catTitle}>{catTitle}</Text>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
        style={styles.mealList}
      /> 
    </View>
  )
}
export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mealList: {
    width: '100%',
  },
  catTitle : {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16
  }
})
