import AsyncStorage from "@react-native-async-storage/async-storage"
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native"
import { axiosIns, getToken, setToken } from "../../config/api"
import { useState } from "react"
import { routes } from "../../routes"

const WelcomeBack = ({ navigation }) => {
  const [username, setUsename] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res = await axiosIns().post('/api/user/login', { username, password })
    console.log(res.data)
    if (res.status === 200) {
      await setToken(res.data.token)
      console.log('login success')
      navigation.navigate(routes.Home)
    }
  }

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
      <TextInput placeholder="username" value={username} onChangeText={value => setUsename(value)} style={{
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
      <View style={{
        alignItems: 'flex-end',
      }}>
        <Text>
          Forgot your password?
        </Text>
      </View>
      <TouchableOpacity onPress={handleLogin}>
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