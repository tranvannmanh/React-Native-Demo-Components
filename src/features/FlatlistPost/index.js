import { FlatList, Image, View, Text } from "react-native"

const DATA = [
  {
    id: '29384702er30284',
    authorName: 'Nguyen Van A',
    numberOfComments: 3,
    image: 'https://elements-cover-images-0.imgix.net/a56c77f5-3050-4e1c-8304-171f3eb17298?auto=compress%2Cformat&fit=max&w=900&s=1e4fd6f5b656af85ff2eeb3f3139e8e8',
  },
  {
    id: '29384702ie248502',
    authorName: 'Nguyen Van B',
    numberOfComments: 2,
    image: 'https://elements-cover-images-0.imgix.net/a56c77f5-3050-4e1c-8304-171f3eb17298?auto=compress%2Cformat&fit=max&w=900&s=1e4fd6f5b656af85ff2eeb3f3139e8e8',
  },
  {
    id: '293847oiuw39824593',
    authorName: 'Nguyen Van C',
    numberOfComments: 1,
    image: 'https://elements-cover-images-0.imgix.net/a56c77f5-3050-4e1c-8304-171f3eb17298?auto=compress%2Cformat&fit=max&w=900&s=1e4fd6f5b656af85ff2eeb3f3139e8e8',
  },
  {
    id: '4809fgioeer30284',
    authorName: 'Nguyen Van D',
    numberOfComments: 4,
    image: 'https://elements-cover-images-0.imgix.net/a56c77f5-3050-4e1c-8304-171f3eb17298?auto=compress%2Cformat&fit=max&w=900&s=1e4fd6f5b656af85ff2eeb3f3139e8e8',
  },
]

const FlatlistPost = () => {
  const Avatar = () => (
    <View style={{
      padding: 8,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        color: 'white',
      }}>
        AE
      </Text>
    </View>
  )

  const AuthorRow = ({authorName, numberComments}) => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 8,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View style={{
          marginRight: 8
        }}>
          <Avatar />
        </View>
        <Text style={{
          fontWeight: '600'
        }}>{authorName}</Text>
      </View>
      <Text>{numberComments} comments</Text>
    </View>
  )

  const Card = ({ item }) => (
    <View style={{
      marginVertical: 8,
      backgroundColor: 'white',
    }}>
      <AuthorRow authorName={item.authorName} numberComments={item.numberOfComments} />
      <Image
        source={{
          uri: item.image
        }}
        // resizeMode=''
        style={{
          width: '100%',
          height: 300,
        }}
      />
    </View>
  )

  return (
    <View style={{
      flex: 1,
    }}>
      <FlatList
        data={DATA}
        renderItem={Card}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FlatlistPost