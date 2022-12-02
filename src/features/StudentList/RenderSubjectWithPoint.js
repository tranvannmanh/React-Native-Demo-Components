import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { useRef, useState } from "react"
import { studentDeleteSubjectReq, updatePointReq } from "../../config/api"

const RenderSubjectWithPoint = ({ item, handleDeleteSubject = (subjectId) => { } }) => {
  const { subjectName, point, studentId, id } = item
  const [newPoint, setNewPoint] = useState(point)
  const inputRef = useRef()
  const [editing, setEditting] = useState(false)

  const handleEditPoint = async () => {
    if (!editing) {
      setEditting(true)
      inputRef.current.focus()
    }
    else {
      await handleUpdatePoint()
      setEditting(false)
    }
  }

  return (
    <View style={{
      flexDirection: 'row',
      paddingVertical: 4,
    }}>
      <View style={{
        flex: 3, flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 4,
        backgroundColor: 'lightgreen',
      }}>
        {/* <TextInput value={subjectName} /> */}
        <Text style={{ color: 'red' }} onPress={() => handleDeleteSubject(id)}>delete</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{subjectName}</Text>
        {/* <TouchableOpacity>
          <Text style={{ color: 'blue' }}>edit</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
        <TextInput
          editable={editing}
          ref={inputRef}
          value={newPoint}
          onChangeText={v => setNewPoint(v)}
          keyboardType='number-pad'
          style={{ width: '50%' }}
        />
        <TouchableOpacity onPress={handleEditPoint}>
          <Text style={{ color: 'blue', flex: 1 }}>
            {editing ? 'done' : 'edit'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default RenderSubjectWithPoint
