import { TouchableOpacity, StyleSheet, Text } from "react-native"

const MyTouchableOpacity = () => {
  return (
      <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={{color: 'black'}}>Press Here</Text>
      </TouchableOpacity>
  )
}
export default MyTouchableOpacity

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "pink",
    padding: 10
  },
});