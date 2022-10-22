import { Text, View } from "react-native"

const FlexLayout = () => {
  return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Hello World</Text>
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <View style={{backgroundColor: 'red', flex: 1}} />
          <View style={{backgroundColor: 'yellow', flex: 1}} />
          <View style={{backgroundColor: 'green', flex: 1}} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <View style={{backgroundColor: 'purple', flex: 1}} />
          <View style={{backgroundColor: 'pink', flex: 1}} />
          <View style={{backgroundColor: 'blue', flex: 1}} />
        </View>
      </View>
    </View>
  )
}
export default FlexLayout
