import { FlatList, StyleSheet, Text, View, Pressable, TextInput, Button, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createSubjectReq, getSubjectReq } from '../../config/api'

const Subjects = () => {
  const [subjects, setSubjects] = useState([])
  const [addNewVisible, setAddNewVisible] = useState(false)
  const [SubjectName, setSubjectName] = useState('')
  const [SubjectCode, setSubjectCode] = useState('')
  const [NumberOfCredit, setNumberOfCredit] = useState(1)

  const getSubject = async () => {
    const res = await getSubjectReq()
    console.log(res)
    if (res.status >= 200 && res.status <= 299) {
      setSubjects(res.data.items)
    }
  }

  const handleDeleteSubject = async () => {

  }

  const createSubject = async () => {
    const res = await createSubjectReq(SubjectName, SubjectName, NumberOfCredit)
    console.log(res)
    if (res.status >= 200 && res.status <= 299) {
      await getSubject()
      setAddNewVisible(false)
    }
  }

  useEffect(() => {
    getSubject()
  }, [])

  const handleCloseModal = () => {
    setAddNewVisible(false)
  }

  const renderSubject = ({ item }) => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 6
    }}>
      <Text style={{ flex: 1, textAlign: 'center' }}>{item.id}</Text>
      <Text style={{ flex: 1, textAlign: 'center' }}>{item.subjectCode}</Text>
      <Text style={{ flex: 2, textAlign: 'center' }}>{item.subjectName}</Text>
      <View style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <Text style={{ textAlign: 'center', flex: 1 }}>{item.numberOfCredit}</Text>
        <TouchableOpacity
          onPress={handleDeleteSubject}
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: 50,
            paddingHorizontal: 6
          }}>
          <Text style={{ color: 'white' }}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={{
      flex: 1,
      paddingTop: 16,
      paddingHorizontal: 16,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 4,
        backgroundColor: 'lightblue',
        paddingVertical: 4,
      }}>
        <Text style={{ flex: 1, textAlign: 'center' }}>id</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>SubjectCode</Text>
        <Text style={{ flex: 2, textAlign: 'center' }}>SubjectName</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>Credit</Text>
      </View>
      <FlatList
        data={subjects}
        renderItem={renderSubject}
        keyExtractor={item => item.id}
      />
      <View style={{
        position: 'absolute',
        bottom: 16,
        alignItems: 'center',
        width: '100%',
      }}>
        <Button title='Add subject' onPress={() => setAddNewVisible(true)} />
      </View>
      <Modal
        animationType='slide'
        visible={addNewVisible}
        onRequestClose={() => { }}
        transparent>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}>
          <Pressable style={{
            padding: 6,
            borderRadius: 3,
            backgroundColor: 'red',
            marginBottom: 16,
          }} onPress={handleCloseModal}>
            <Text>X close</Text>
          </Pressable>
          <View style={{
            padding: 10,
            borderRadius: 12,
            backgroundColor: 'white',
          }}>
            <TextInput
              placeholder='subject name'
              value={SubjectName}
              onChangeText={value => setSubjectName(value)}
              style={{
                borderWidth: 1,
                borderColors: 'lightblue',
                paddingLeft: 4,
                marginBottom: 8,
                fontSize: 18,
              }}
            />
            <TextInput
              placeholder='subject code'
              value={SubjectCode}
              onChangeText={value => setSubjectCode(value)}
              style={{
                borderWidth: 1,
                borderColors: 'lightblue',
                paddingLeft: 4,
                marginBottom: 8,
                fontSize: 18,
              }}
            />
            <TextInput
              placeholder='number of credit'
              value={NumberOfCredit}
              onChangeText={value => setNumberOfCredit(value)}
              keyboardType='number-pad'
              style={{
                borderWidth: 1,
                borderColors: 'lightblue',
                paddingLeft: 4,
                marginBottom: 8,
                fontSize: 18,
              }}
            />
            <Button title='Add' onPress={createSubject} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Subjects

const styles = StyleSheet.create({})