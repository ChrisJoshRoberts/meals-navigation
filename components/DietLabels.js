import { Image, Text, View } from "react-native"


const DietLabels = ({isVegan, isVegetarian, isGlutenFree, isLactoseFree}) => {
  return (
    (isVegan || isVegetarian || isGlutenFree || isLactoseFree) && (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16}}>
              {isVegan && 
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image 
                    source={{uri: 'https://img.icons8.com/ios/452/vegan-symbol.png'}}
                    width={20}
                    height={20}
                    style={{marginRight: 4}}
                  />
                  <Text>Vegan</Text>
                </View>
              }
              {isVegetarian && 
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                  source={{uri: 'https://img.icons8.com/ios/452/vegetarian-food.png'}}
                  width={20}
                  height={20}
                  style={{marginRight: 4}}
                />
                <Text>Vegetarian</Text>
              </View>
              }
              {isGlutenFree &&
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image 
                    source={{uri: 'https://img.icons8.com/ios/452/bread.png'}}
                    width={20}
                    height={20}
                    style={{marginRight: 4}}
                  />
                  <Text>Gluten Free</Text>
                </View>
              }
              {isLactoseFree && 
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                  source={{uri: 'https://img.icons8.com/ios/452/no-milk.png'}}
                  width={20}
                  height={20}
                  style={{marginRight: 4}}
                />
                <Text>Lactose Free</Text>
              </View>
              }
            </View>
          )
        )
}

export default DietLabels