
import { Button, Pressable, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Categories" component={CategoriesScreen} options={
          {
            title: 'All Categories',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: '#f4511e'
            }
          }
        }/>
        <Stack.Screen name="Meals" component={MealsOverviewScreen} options={({route, navigation}) => {
          return {
            title: route.params.categoryId
          }
        }} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={
          {
            headerRight: () => (
              <Pressable 
                onPress={() => {
                  alert('This is a button!')
                  setIsPressed(!isPressed)
                }}
              >
                <Ionicons name={isPressed ? "star" : "star-outline"} size={24} color="black" />
              </Pressable>
            )
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: 'r#072448',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
