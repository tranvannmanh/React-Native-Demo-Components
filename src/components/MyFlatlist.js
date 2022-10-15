import { FlatList, View, Text } from "react-native"

const DATA = [
  {
    id: 164,
    fname: 'tran van manh'
  },
  {
    id: 264,
    fname: 'dao thanh hiep'
  },
  {
    id: 364,
    fname: 'vu duy dan'
  },
  {
    id: 464,
    fname: 'nguyen thi lan anh'
  },
]
const MyFlatlist = () => {
  const renderStudent = (sv) => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      // flex: 1
    }}>
      <Text style={{color: 'black'}}>{sv.item.id}</Text>
      <Text style={{color: 'black'}}>{sv.item.fname}</Text>
    </View>
  )
  return (
    <View style={{
      // flex: 1,
      // backgroundColor: 'green',
      // height: 500,
      justifyContent: 'center'
    }}>
      <Text>Danh sách sinh viên</Text>
      <FlatList
        data={DATA}
        renderItem={renderStudent}
        keyExtractor={item => String(item.id)}
      />
    </View>
  )
}
export default MyFlatlist
