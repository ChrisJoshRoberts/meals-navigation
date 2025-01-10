import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const CategoryGridTile = ({title, color, onPress}) => {
  const backgroundColor = { backgroundColor: color }
  const navigation = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
      >
        <View style={[styles.innerContainer, backgroundColor]}>
          <Text style={styles.gridTitle}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 3,
    borderRadius: 8,
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  gridTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  }
})