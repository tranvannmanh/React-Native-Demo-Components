
import { FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { routes } from '../../routes'
import Separator from './components/Separator'
import { getAllStudentsReq } from '../../api/students'
import { useIsFocused } from '@react-navigation/native'

const Students = ({ navigation }) => {
  const isFocused = useIsFocused()
  const [searchTxt, setSearchTxt] = useState('')
  const [students, setStudents] = useState([])
  const [page, setPage] = useState({
    currentPage: 1,
    totalPage: 1
  })

  const handleSearchstudents = (searchTxt = '') => {
    if (searchTxt) {
      const filteredstudents = students.filter(value => value.title.includes(searchTxt))
      setStudents(filteredstudents)
    }
    else {
      setStudents(students)
    }
  }

  const getStudents = async () => {
    const res = await getAllStudentsReq({ pageSize: 10, pageIndex: 1 })
    console.log(res.data.items)
    if (res.status && res.data) {
      setStudents(res.data.items)
    }
    else {
      setStudents([])
    }
  }

  useEffect(() => {
    getStudents()
  }, [isFocused])

  useEffect(() => {
    handleSearchstudents(searchTxt)
  }, [searchTxt])

  const renderStudents = ({ item }) => {
    const { id, studentCode, name, email, address, className } = item
    const readDetail = () => {
      navigation.navigate(routes.StudentDetail, {
        id,
        name,
        studentCode,
        email,
        address,
        className
      })
    }
    return (
      <Pressable
        onPress={readDetail}
        style={{
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontWeight: '600', marginBottom: 8 }}>{name}</Text>
        <Text>MSSV: {studentCode}</Text>
        <Text>Email: {email}</Text>
      </Pressable>
    )
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 16,
    }}>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: 'white',
            fontSize: 15,
            marginRight: 16,
            borderWidth: 1,
            borderColor: 'gray',
            paddingRight: 4,
            // marginBottom: 16,
          }}
          value={searchTxt}
          onChangeText={value => setSearchTxt(value)}
          placeholder="Tìm kiếm sinh viên"
        />
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightblue',
          paddingHorizontal: 8,
        }}>
          <Text style={{ color: 'white' }}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={students}
        renderItem={renderStudents}
        ItemSeparatorComponent={Separator}
        key={item => item.id}
      />
    </View>
  )
}

export default Students
