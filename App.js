
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
// import FavouritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='All Categories' component={CategoriesScreen} />
      <Drawer.Screen name='Favourites' component={FavouriteScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    // <FavouritesContextProvider>
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="Categories" component={DrawerNav} options={{headerShown: false}} />
          <Stack.Screen name="Meals" component={MealsOverviewScreen} options={({route, navigation}) => {
            return {
              title: route.params.categoryId
            }
          }} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </FavouritesContextProvider>
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
