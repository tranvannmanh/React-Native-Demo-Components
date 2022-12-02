import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import StudentItem from './components/studentItem'
import { axiosIns, getStudentsReq, getToken } from '../../config/api'

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
      const token = await getToken()
      const res = await axiosIns(token).delete(`/api/student/delete/${id}`)
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
      const token = await getToken()
      const res = await axiosIns(token).post('api/student/create-student', {
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
        left: 20,
        bottom: 20,
        right: 20,
        marginHorizontal: 10
      }}>
        <TextInput
          placeholder='Ten sinh vien'
          value={newStudent}
          onChangeText={value => setNewStudent(value)}
          style={{ flex: 1, borderWidth: 1, borderColor: 'lightblue', paddingLeft: 10 }} />
        <Pressable onPress={handleAddNewStudent} style={{
          paddingHorizontal: 16,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'green'
        }}>
          <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default StudentList

const styles = StyleSheet.create({})