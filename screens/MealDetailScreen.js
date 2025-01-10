import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import DietLabels from "../components/DietLabels"
import { useLayoutEffect } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react"
// import { FavouritesContext } from "../store/context/favourites-context"
import { addFavourite, removeFavourite } from "../store/redux/favourites";


const MealDetailScreen = ({ route, navigation }) => {
  // const FavouriteMealsContext = useContext(FavouritesContext);
  const FavouriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dipatch = useDispatch()

  const mealId = route.params.mealId
  const mealTitle = route.params.title
  const imgUrl = route.params.imageUrl
  const complexity = route.params.complexity
  const duration = route.params.duration
  const affordability = route.params.affordability
  const ingredients = route.params.ingredients
  const steps = route.params.steps
  const isVegan = route.params.isVegan
  const isVegetarian = route.params.isVegetarian
  const isGlutenFree = route.params.isGlutenFree
  const isLactoseFree = route.params.isLactoseFree

  const mealIsFav = FavouriteMealIds.includes(mealId)

  function headerButtonHandler() {
    if (mealIsFav) {
      // FavouriteMealsContext.removeFavourite(mealId)
      dipatch(removeFavourite({id: mealId}))
    } else {
      // FavouriteMealsContext.addFavourite(mealId)
      dipatch(addFavourite({id: mealId}))
    }
    alert(mealIsFav ? "Removed from favourites" : "Added to favourites")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <Pressable 
          onPress={headerButtonHandler}
        >
          <Ionicons name={mealIsFav ? "star" : "star-outline"} size={24} color="black" />
        </Pressable>
      )
    })
  }, [navigation, headerButtonHandler])

  return (
    <ScrollView style={{flex: 1, paddingBottom: 16}}>
      <Image 
        source={{uri : imgUrl}}
        resizeMode="cover"
        style={styles.mealImage}
      /> 
      <Text style={styles.pageTitle}>{mealTitle}</Text>
      <DietLabels 
        isVegan={isVegan} 
        isVegetarian={isVegetarian} 
        isGlutenFree={isGlutenFree} 
        isLactoseFree={isLactoseFree} 
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>{complexity}</Text>
        <Text style={styles.detailText}>{duration} min</Text>
        <Text style={styles.detailText}>{affordability}</Text>
      </View>
      <Text style={styles.pageSubtitle}>Ingredients</Text>
      <View style={styles.ingredientList}>
        {ingredients.map((ingredient, index) => {
          return <Text key={index} style={styles.ingredientsItem}>{ingredient}</Text>
        })}
      </View>
      <View style={styles.stepsContainer}>
        <Text style={styles.stepsTitle}>Steps</Text>
        {steps.map((step, index) => {
          return <Text key={index} style={{marginVertical: 4}}>{index + 1}. {step}</Text>
        })}
      </View>
    </ScrollView>

  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  pageSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    backgroundColor: '#07244851',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  mealImage: {
    width: '100%',
    height: 160,
  },
  detailText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ingredientList: {
    margin: 16,
  },
  ingredientsItem: {
    marginVertical: 4,
  },
  stepsContainer: {
    margin: 16,
  },
  stepsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})