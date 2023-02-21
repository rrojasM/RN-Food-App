import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/presentation/views/home/Home';
import Register from './src/presentation/views/register/Register';
import { ProfileInfoScreen } from './src/presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/presentation/views/roles/Roles';
import { AdminTabsNavigation } from './src/presentation/navigation/AdminTabsNavigation';
import { ClientTabsNavigation } from './src/presentation/navigation/ClientTabsNavigation copy';
import ProfileUpdate from './src/presentation/views/profile/update/ProfileUpdate';
import { User } from './src/domain/entities/User';
import { UserProvider } from './src/presentation/context/UserContext';
import { AdminCategoryCreateScreen } from './src/presentation/views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdate } from './src/presentation/views/admin/category/update/CategoryUpdate';
import { Category } from './src/domain/entities/Category';

export type RootStackParamList = {
  Home: undefined,
  RegisterScreen: undefined,
  //ProfileInfoScreen: undefined,
  RolesScreen: undefined,
  AdminTabsNavigation: undefined,
  ClientTabsNavigation: undefined,
  ProfileUpdateScreen: { user: User },
  AdminCategoryCreateScreen: undefined,
  AdminCategoryUpdate: { category: Category }

}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserState>

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

          <Stack.Screen
            name="ProfileUpdateScreen"
            component={ProfileUpdate}
            options={{
              headerShown: true,
              title: 'Actualizar Usuario'
            }}
          />

          <Stack.Screen
            name="AdminCategoryCreateScreen"
            component={AdminCategoryCreateScreen}
            options={{
              headerShown: true,
              title: 'Nueva Categoria'
            }}
          />
          <Stack.Screen
            name="AdminCategoryUpdate"
            component={AdminCategoryUpdate}
            options={{
              headerShown: true,
              title: 'Editar Categoria'
            }}
          />

        </Stack.Navigator>
      </UserState>

    </NavigationContainer>
  );
};

const UserState = ({ children }: any) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}

export default App;