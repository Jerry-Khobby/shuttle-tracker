/* import {View } from 'react-native'; */
import "react-native-gesture-handler";
import BottomTabNavigator from "./routes/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import MainStackRouter from "./routes/MainNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <MainStackRouter />
    </NavigationContainer>
  );
};

export default App;
