import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable, Text, View } from "react-native"
import Students from "../src/features/Students"
import AddNewStudent from "../src/features/Students/views/AddNewStudent"
import StudentDetail from "../src/features/Students/views/StudentDetail"
import { routes } from "../src/routes"

const Stack = createNativeStackNavigator()

const MainStack = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator
      initialRouteName={routes.Students}
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      {/* <Stack.Screen name={routes.LoginTemplate} component={LoginTemplate} />
      <Stack.Screen name={routes.CreateAccount} component={CreateAccount} />
      <Stack.Screen name={routes.WelcomeBack} component={WelcomeBack} />
      <Stack.Screen name={routes.FlatlistPost} component={FlatlistPost} />
      <Stack.Screen name={routes.StudentList} component={StudentList} />
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.Subjects} component={Subjects} />
      <Stack.Screen name={routes.DetailWithListPoint} component={DetailWithListPoint} /> */}
      <Stack.Screen name={routes.Students} component={Students}
        options={{
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate(routes.AddNewStudent)}>
              <Text style={{ fontSize: 28 }}>+</Text>
            </Pressable>
          )
        }}
      />
      <Stack.Screen name={routes.StudentDetail} component={StudentDetail} />
      <Stack.Screen name={routes.AddNewStudent} component={AddNewStudent} />
    </Stack.Navigator>
  )
}

export default MainStack
