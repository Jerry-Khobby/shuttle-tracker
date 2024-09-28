/* import {View } from 'react-native'; */
import "react-native-gesture-handler";
import BottomTabNavigator from './routes/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App=()=>{
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}


export default App;

