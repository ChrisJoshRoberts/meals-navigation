import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const MealsCard = ({title, imgUrl, complexity, duration,onPress}) => {
  return (
    <View style={styles.cardContainer}>
      <Pressable 
        onPress={onPress}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#8aa2aa' : 'white',
            borderRadius: 8,
            
          }
        ]}
      >
        <Image 
          source={{uri : imgUrl}}
          style={styles.cardImage}
          resizeMode='cover'
        />
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text>{complexity}</Text>
            <Text>{duration} min</Text>
          </View>
          <View>
            <Text style={styles.readMore}>Read more</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealsCard

const styles = StyleSheet.create({
  cardContainer : {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    alignItems: 'center',
    margin: 16,
    width: '92%',
    overflow: 'hidden'
  },
  cardImage: {
    marginBottom: 16,
    width: '100%',
    height: 200
  },
  detailsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    padding: 16,
    width: '100%',
    borderRadius: 8
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  readMore: {
    color: 'blue'
  }
})