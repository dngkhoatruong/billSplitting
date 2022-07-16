import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import Home from '../screens/home';
import NewBill from '../screens/bill/newBill';
import BillDetail from '../screens/bill/billDetail';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          component={Welcome}
          name="Welcome"
        />
        <Stack.Screen
          component={Home}
          name="Home"
        />
        <Stack.Screen
          component={NewBill}
          name="NewBill"
        />
        <Stack.Screen
          component={BillDetail}
          name="BillDetail"
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
};

export default MainNavigation;