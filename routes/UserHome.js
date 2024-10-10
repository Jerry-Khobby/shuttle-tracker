import { createStackNavigator } from "@react-navigation/stack";
import DropOff from "../src/routes/dropoff";
import PickUpDropOff from "../src/routes/pickup";
import SelectRoute from "../src/routes/select-route";
import SelectShuttle from "../src/routes/select-shuttle";
import SelectPickUp from "../src/routes/selectpickup";

const Stack = createStackNavigator();
const UsersHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="SelectRoute" component={SelectRoute} />
      <Stack.Screen name="PickUpDropOff" component={PickUpDropOff} />
      <Stack.Screen name="DropOff" component={DropOff} />
      <Stack.Screen name="SelectPickUp" component={SelectPickUp} />
      <Stack.Screen name="SelectShuttle" component={SelectShuttle} />
    </Stack.Navigator>
  );
};

export default UsersHomeStack;
