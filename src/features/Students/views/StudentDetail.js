import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { deleteStudentReq } from '../../../api/students'

const StudentDetail = ({ route, navigation }) => {

  const handleShowDeleteOption = () => {
    Alert.alert(
      "Xóa sinh viên",
      "Bạn có chắc muốn xóa sinh viên",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => await handleDelete(route.params.id) }
      ]
    );
  }


  const handleDelete = async (id) => {
    const res = await deleteStudentReq({ id })
    console.log(res)
    if (res.status) {
      navigation.goBack()
    }
    else {
      Alert.alert('có lỗi xảy ra...')
    }
  }

  const Detail = ({ title = '', description = '' }) => {
    return (
      <View style={{
        marginTop: 12,
        borderBottomWidth: 1,
        paddingVertical: 2,
      }}>
        <Text style={{ fontWeight: '600' }}>{title}</Text>
        <Text>{description}</Text>
      </View>
    )
  }
  return (
    <View style={{
      flex: 1,
      padding: 16,
    }}>
      <Detail title='Tên sinh viên' description={route?.params?.name || ''} />
      <Detail title='MSSV' description={route?.params?.studentCode || ''} />
      <Detail title='Lớp' description={route?.params?.className || ''} />
      <Detail title='Email' description={route?.params?.email || ''} />
      <View>
        <View style={{
          marginTop: 12,
          paddingVertical: 2,
        }}>
          <Text style={{ fontWeight: '600' }}>Địa chỉ</Text>
          <View style={{
            minHeight: 100,
            borderWidth: 1
          }}>
            <Text>{route?.params?.address || ''}</Text>
          </View>
        </View>
      </View>
      <Pressable onPress={handleShowDeleteOption}
        style={{
          marginTop: 16,
        }}
      >
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Xóa sinh viên</Text>
      </Pressable>
    </View>
  )
}

export default StudentDetail

const styles = StyleSheet.create({})