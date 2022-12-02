import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { Octicons, AntDesign } from '@expo/vector-icons';
import { axiosIns, getStudentsReq, getToken } from '../../../config/api';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../routes';


const StudentItem = ({ item, handleDelete = (id) => { } }) => {
  const { name, id, dateOfBirth, studentCode } = item
  // console.log(item)
  const [value, setValue] = useState(name)
  const [editable, setEditable] = useState(false)
  const inputRef = useRef()
  const navigation = useNavigation()

  const handleEdit = () => {
    setEditable(true)
    inputRef.current.focus()
    console.log('.... edit');
  }

  const handleUpdateName = async () => {
    try {
      const token = await getToken()
      const res = await axiosIns(token).put('/api/student/update', {
        name: value,
        dateOfBirth: dateOfBirth,
        studentCode: studentCode,
        studentId: id
      })
      console.log(res.status, res.data)
      // console.log();
      if (res.status > 299) {
        setValue(name)
      }
    } catch (error) {
      console.error(error)
    }
  }



  const handleDoneEdit = () => {
    handleUpdateName()
    setEditable(false)
  }

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: 4
        // alignItems: 'center'
      }}
      onPress={() => navigation.navigate(routes.DetailWithListPoint, { studentId: id })}
    >
      {/* <Text>TRAN VAN A</Text> */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={value => setValue(value)}
        style={{ color: 'black', flex: 1, backgroundColor: 'lightblue', paddingHorizontal: 8, }}
        editable={editable} />
      <View style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 8
      }}>
        <Pressable onPress={handleEdit}>
          <Octicons name="pencil" size={18} color="black" />
        </Pressable>
        <Pressable onPress={handleDoneEdit}>
          <Octicons name="issue-closed" size={18} color="green" style={{ marginHorizontal: 32 }} />
        </Pressable>
        <Pressable onPress={() => handleDelete(id)}>
          <AntDesign name="closecircle" size={18} color="red" />
        </Pressable>
      </View>
    </Pressable>
  )
}

export default StudentItem

const styles = StyleSheet.create({})