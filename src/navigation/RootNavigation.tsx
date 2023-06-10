import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginPage } from 'screens/LoginPage';
import { MainPage } from 'screens/MainPage';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
