import { Image, Text, TouchableOpacity, View } from "react-native"

const LoginTemplate = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
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
        Login Template
      </Text>
      <Text style={{
        textAlign: 'center',
        marginVertical: 16,
      }}>
        The easiest way to start with your amazing application.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome back')}
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
            }}
          >LOGIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create account')}
      >
        <View style={{
          borderWidth: 2,
          borderColor: 'grey',
          borderRadius: 10,
          alignItems: 'center',
          paddingVertical: 12,
        }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#550ccf',
            }}
          >SIGN UP</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default LoginTemplate