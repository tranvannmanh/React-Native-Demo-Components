import { Image, Text, TextInput, View, TouchableOpacity } from "react-native"

const WelcomeBack = ({navigation}) => {

  const handleSignUp = () => {
    navigation.navigate("Create account")
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 32,
    }}>
      <View style={{
        alignItems: 'center',
      }}>
        <Image
            source={require('../../assets/logo.png')}
            style={{
              width: 180,
              height: 180,
              // justifyContent: 'center'
            }}
        />
      </View>
      <Text style={{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#550ccf',
        marginTop: 16,
      }}>
        Welcome back.
      </Text>
      <TextInput placeholder="Email" style={{
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        marginVertical: 16,
      }} />
      <TextInput placeholder="Password"style={{
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        marginVertical: 16,
      }} />
      <View style={{
        alignItems: 'flex-end',
      }}>
        <Text>
          Forgot your password?
        </Text>
      </View>
      <TouchableOpacity >
        <View style={{
          backgroundColor: '#550ccf',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#550ccf',
          borderRadius: 10,
          paddingVertical: 12,
          marginVertical: 16,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'white',
          }}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center' }}>
        Don't have account? <Text style={{
            fontWeight: 'bold', color: '#550ccf'
          }}
          onPress={handleSignUp}
        >Sign up</Text>
      </Text>
    </View>
  )
}
export default WelcomeBack