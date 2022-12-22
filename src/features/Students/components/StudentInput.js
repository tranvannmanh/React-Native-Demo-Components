import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const StudentInput = ({ title = '', value = '', onChangeValue = () => { } }) => {
  return (
    <View style={{
      marginBottom: 12,
    }}>
      <Text style={{ fontWeight: '600', marginBottom: 6 }}>{title}</Text>
      <View style={{
        borderWidth: 1,
        paddingHorizontal: 4,
      }}>
        <TextInput value={value} onChangeText={onChangeValue} />
      </View>
    </View>
  )
}

export default StudentInput
