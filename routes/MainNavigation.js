import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../src/splash/splash";
import BottomTabNavigator from "./TabNavigation";
import DriverLogin from "../src/login/login";

const Stack = createStackNavigator();

const MainStackRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DriverLogin" component={DriverLogin} />
      <Stack.Screen name="MaintabNavigation" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackRouter;
