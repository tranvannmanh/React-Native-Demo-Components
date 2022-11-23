import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import StudentItem from './components/studentItem'
import { axiosIns, getStudentsReq } from '../../config/api'

const StudentList = () => {
  const [studentds, setStudentds] = useState([])
  const [newStudent, setNewStudent] = useState('')

  const getStudents = async () => {
    const res = await getStudentsReq()
    console.log('res...', res)
    if (res) {
      setStudentds(res)
    }
  }

  const handleDeleteStudent = async (id) => {
    try {
      const res = await axiosIns.delete(`delete/${id}`)
      console.log(res.status);
      if (res.status <= 299) {
        const studentRefresh = studentds.filter(value => value.id !== id)
        // console.log(studentRefresh)
        setStudentds(studentRefresh)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddNewStudent = async () => {
    try {
      const res = await axiosIns.post('create-student', {
        name: newStudent,
        dateOfBirth: String(new Date().toISOString()),
        studentCode: String(Math.floor(Math.random() * 100000 + 10000)),
      })
      // if (res.status >= 200 && res.status <= 299)
      console.log(res.status)
      if (299 <= res.status <= 200) {
        getStudents()
      }
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
      {/* <View> */}
      <ScrollView>
        {
          studentds.map(item => <StudentItem item={item} key={item.id} handleDelete={handleDeleteStudent} />)
        }
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        // width: '100%',
        bottom: 20,
        right: 20,
        marginHorizontal: 10
      }}>
        <TextInput
          placeholder='Ten sinh vien'
          value={newStudent}
          onChangeText={value => setNewStudent(value)}
          style={{ flex: 1, borderWidth: 1, borderColor: 'blue' }} />
        <Pressable onPress={handleAddNewStudent} >
          <View style={{
            padding: 8,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default StudentList

const styles = StyleSheet.create({})