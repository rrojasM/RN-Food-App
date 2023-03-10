import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/presentation/views/home/Home';
import Register from './src/presentation/views/register/Register';
import { ProfileInfoScreen } from './src/presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/presentation/views/roles/Roles';
import { AdminTabsNavigation } from './src/presentation/navigation/AdminTabsNavigation';
import { ClientTabsNavigation } from './src/presentation/navigation/ClientTabsNavigator';
import ProfileUpdate from './src/presentation/views/profile/update/ProfileUpdate';
import { User } from './src/domain/entities/User';
import { UserProvider } from './src/presentation/context/UserContext';
import { AdminCategoryCreateScreen } from './src/presentation/views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdate } from './src/presentation/views/admin/category/update/CategoryUpdate';
import { Category } from './src/domain/entities/Category';
import { CategoryProvider } from './src/presentation/context/CategoryContext';
import { MainStackNavigator } from './src/presentation/navigation/MainStackNavigator';

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
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;