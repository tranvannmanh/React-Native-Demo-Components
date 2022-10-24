import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FlatlistPost from "../src/features/FlatlistPost"
import CreateAccount from "../src/features/Login/CreateAccount"
import LoginTemplate from "../src/features/Login/LoginTemplate"
import WelcomeBack from "../src/features/Login/WelcomeBack"

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Flatlist poster"
    >
      <Stack.Screen name='Login template' component={LoginTemplate} />
      <Stack.Screen name='Create account' component={CreateAccount} />
      <Stack.Screen name='Welcome back' component={WelcomeBack} />
      <Stack.Screen name='Flatlist poster' component={FlatlistPost} />
    </Stack.Navigator>
  )
}

export default MainStack
