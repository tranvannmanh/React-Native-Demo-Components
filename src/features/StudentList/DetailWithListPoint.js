import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getListPointByStudentReq, studentAddSubjectReq, studentDeleteSubjectReq } from '../../config/api'
import RenderSubjectWithPoint from './RenderSubjectWithPoint'

const DetailWithListPoint = ({ route }) => {
  const { studentId } = route.params
  const [listPoint, setListPoint] = useState([])
  const [subjectId, setSubjectId] = useState(0)

  const getListPoint = async () => {
    const res = await getListPointByStudentReq(studentId)
    console.log(res)
    if (res.status >= 200 && res.status <= 299) {
      setListPoint(res.data)
    }
  }

  const handleAddNewSubjectWithStudent = async () => {
    const { status, data } = await studentAddSubjectReq(Number(subjectId), studentId)
    console.log(status, data)
    if (status >= 200 && status <= 299) {
      await getListPoint()
    }
  }

  const handleDeleteSubject = async (subjectId) => {
    const res = await studentDeleteSubjectReq(subjectId, studentId)
    console.log(res)
    if (res.status <= 299 && res.status >= 200) {
      await getListPoint()
    }
  }

  useEffect(() => {
    getListPoint()
  }, [])


  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    }}>
      {/* {renderSubjectWithPoint()} */}
      {/* <FlatList /> */}
      {
        listPoint.map((item, index) => <RenderSubjectWithPoint item={{ ...item, studentId }} handleDeleteSubject={handleDeleteSubject} key={index} />)
      }
      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        left: 20,
        bottom: 20,
        right: 20,
        marginHorizontal: 10
      }}>
        <TextInput
          placeholder='SubjectId'
          value={subjectId}
          onChangeText={value => setSubjectId(value)}
          style={{ flex: 1, borderWidth: 1, borderColor: 'lightblue', paddingLeft: 10 }} />
        <TouchableOpacity onPress={handleAddNewSubjectWithStudent} style={{
          paddingHorizontal: 16,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'green'
        }}>
          <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailWithListPoint

const styles = StyleSheet.create({})