import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import StudentInput from '../components/StudentInput'
import { routes } from '../../../routes'
import { addNewStudentReq } from '../../../api/students'

const AddNewStudent = ({ navigation }) => {
  const [name, setName] = useState('')
  const [MSSV, setMSSV] = useState('')
  const [className, setClassName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const addressRef = useRef()

  const handleCancel = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc hủy thêm sinh viên?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate(routes.Students) }
      ]
    );
  }

  const addNewStudent = async () => {
    if (name.length < 20) {
      setError('Ten sinh vien toi thieu 20 ky tu')
      return false
    }
    if (MSSV.length < 5) {
      setError('Ten sinh vien toi thieu 5 ky tu')
      return false

    }
    if (!email.includes('@')) {
      setError('email phai chu @')
      return false

    }
    const res = await addNewStudentReq({ name, className, email, address, studentCode: MSSV })
    if (res.status) {
      navigation.navigate(routes.Students)
    }
    else {
      Alert.alert(
        "Xác nhận",
        "Có lỗi xảy ra",
        [
          {
            text: "Ok",
            onPress: () => { },
            style: "cancel"
          },
        ]
      );
    }
    return true
  }

  const handleAdd = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc hủy thêm sinh viên?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => await addNewStudent() }
      ]
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      {
        error && <Text style={{ color: 'red' }}>{error}</Text>
      }
      <StudentInput title='Tên sinh viên' value={name} onChangeValue={value => setName(value)} />
      <StudentInput title='MSSV' value={MSSV} onChangeValue={value => setMSSV(value)} />
      <StudentInput title='Lớp' value={className} onChangeValue={value => setClassName(value)} />
      <StudentInput title='Email' value={email} onChangeValue={value => setEmail(value)} />
      <Pressable onPress={() => addressRef.current?.focus()} style={{
        marginBottom: 12,
      }}>
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>Địa chỉ</Text>
        <View style={{
          borderWidth: 1,
          paddingHorizontal: 4,
          minHeight: 100,
        }}>
          <TextInput ref={addressRef} value={address} onChangeText={(value) => setAddress(value)} multiline />
        </View>
      </Pressable>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Pressable onPress={handleCancel}><Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Hủy bỏ</Text></Pressable>
        <Pressable onPress={handleAdd}><Text>Lưu lại</Text></Pressable>
      </View>
    </View>
  )
}

export default AddNewStudent

const styles = StyleSheet.create({})