import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { routes } from '../../routes'

const Home = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16
    }}>
      <View style={{
        marginVertical: 16
      }}>
        <Button title='Danh sách môn học' onPress={() => navigation.navigate(routes.Subjects)} />
      </View>
      <Button
        title='Danh sách sinh viên'
        onPress={() => navigation.navigate(routes.StudentList)} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})