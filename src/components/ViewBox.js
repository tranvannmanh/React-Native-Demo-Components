import { Text, View } from "react-native"

const ViewBox = () => {
  return (
    <View style={{
      // height: 50,
      // width: 50,
      padding: 16,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'purple',
    }}>
      <Text>I'm inside core component View</Text>
    </View>
  )
}
export default ViewBox