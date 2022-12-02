import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FlatlistPost from "../src/features/FlatlistPost"
import Home from "../src/features/Home"
import CreateAccount from "../src/features/Login/CreateAccount"
import LoginTemplate from "../src/features/Login/LoginTemplate"
import WelcomeBack from "../src/features/Login/WelcomeBack"
import StudentList from "../src/features/StudentList"
import DetailWithListPoint from "../src/features/StudentList/DetailWithListPoint"
import Subjects from "../src/features/Subjects"
import { routes } from "../src/routes"

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LoginTemplate}
    >
      <Stack.Screen name={routes.LoginTemplate} component={LoginTemplate} />
      <Stack.Screen name={routes.CreateAccount} component={CreateAccount} />
      <Stack.Screen name={routes.WelcomeBack} component={WelcomeBack} />
      <Stack.Screen name={routes.FlatlistPost} component={FlatlistPost} />
      <Stack.Screen name={routes.StudentList} component={StudentList} />
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.Subjects} component={Subjects} />
      <Stack.Screen name={routes.DetailWithListPoint} component={DetailWithListPoint} />
    </Stack.Navigator>
  )
}

export default MainStack
