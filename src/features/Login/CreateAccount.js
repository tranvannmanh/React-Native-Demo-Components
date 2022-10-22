import { Image, Text, TextInput, View, TouchableOpacity } from "react-native"

const CreateAccount = ({navigation}) => {
  
  const handleLogin = () => {
    navigation.navigate("Welcome back")
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
        Create Account
      </Text>
      <TextInput placeholder="name" style={{
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        marginVertical: 16,
      }} />
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
      <TouchableOpacity
        onPress={handleLogin}
      >
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
          }}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center' }}>
        Already have an account? <Text
          style={{
            fontWeight: 'bold', color: '#550ccf'
          }}
          onPress={handleLogin}
        >Login</Text>
      </Text>
    </View>
  )
}
export default CreateAccount