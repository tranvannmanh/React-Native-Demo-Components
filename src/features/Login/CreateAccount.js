import { Image, Text, TextInput, View, TouchableOpacity, ToastAndroid, Platform } from "react-native"
import { createAccountReq } from "../../config/api"
import { useState } from "react"

const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState(1)

  const handleLogin = () => {
    navigation.navigate("Welcome back")
  }

  const handleCreateAccount = async () => {
    const res = await createAccountReq(username, password, userType)
    console.log(res.data, res.status)
    if (res.status >= 200 && res.status <= 299) {
      Platform.OS === 'android' ? ToastAndroid.show('Tao tai khoan thanh cong', ToastAndroid.LONG) : undefined
      navigation.goBack()
    }
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
      <TextInput placeholder="username" value={username} onChangeText={value => setUsername(value)} style={{
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        marginVertical: 16,
      }} />
      <TextInput placeholder="password" value={password} onChangeText={value => setPassword(value)} style={{
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        marginVertical: 16,
      }} />
      <TextInput placeholder="userType 1/2" value={userType} onChangeText={value => setUserType(value)} style={{
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        marginVertical: 16,
      }} />
      <TouchableOpacity
        onPress={handleCreateAccount}
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