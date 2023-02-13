import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/presentation/views/home/Home';
import Register from './src/presentation/views/register/Register';
import { ProfileInfoScreen } from './src/presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/presentation/views/roles/Roles';
import { AdminTabsNavigation } from './src/presentation/navigation/AdminTabsNavigation';
import { ClientTabsNavigation } from './src/presentation/navigation/ClientTabsNavigation copy';

export type RootStackParamList = {
  Home: undefined,
  RegisterScreen: undefined,
  //ProfileInfoScreen: undefined,
  RolesScreen: undefined,
  AdminTabsNavigation: undefined,
  ClientTabsNavigation: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={Register}
          options={{
            headerShown: true,
            title: 'Nuevo Usuario'
          }}
        />

        {/* <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
        /> */}

        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{
            headerShown: true,
            title: 'Seleciona un Rol'
          }}
        />

        <Stack.Screen
          name="AdminTabsNavigation"
          component={AdminTabsNavigation}
        />

        <Stack.Screen
          name="ClientTabsNavigation"
          component={ClientTabsNavigation}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;