import { useState } from "react"
import { Button, Modal, View, Text } from "react-native"

const MyModal = () => {
  const [isVisible, setVisible] = useState(false)

  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'yellow',
    }}>
      <Button title="Show modal" onPress={() => setVisible(true)} />
      <Modal
        visible={isVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View
          style={{
            // backgroundColor: 'gray',
            // height: '55%',
            flex: 1,
            justifyContent: 'flex-end'
          }}
        >
          <View style={{
            height: '50%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 16,
            justifyContent: 'center',
            backgroundColor: 'purple',
          }}>
            <Text style={{textAlign: 'center'}}>
              This is core component Modal
            </Text>
            <Button title="hide modal" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default MyModal
