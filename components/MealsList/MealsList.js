import { FlatList, StyleSheet ,View } from 'react-native'
import React from 'react'
import MealsCard from './MealsCard'

const MealsList = ({items, nav}) => {

  const renderMealItem = (itemData, navigation) => {
    const pressHandler = () => {
      nav.navigate('MealDetail', {
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
      <FlatList 
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
        style={styles.mealList}
      /> 
    </View>
  )
}

export default MealsList

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