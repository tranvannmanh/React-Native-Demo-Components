import { Pressable, Text, View } from "react-native"

const MyPressable = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>This is a button</Text>
      <Pressable
        style={{
          padding: 12,
          backgroundColor: 'purple',
          borderRadius: 10,
      }}>
        <Text style={{color: 'white'}}>Button using Pressable component</Text>
      </Pressable>
    </View>
  )
}
export default MyPressable
