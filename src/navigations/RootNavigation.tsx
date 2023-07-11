import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '../utils/routes';
import Home from '../pages/Home';
import Akun from '../pages/Akun';
import Outlet from '../pages/Outlet';
import PlayCard from '../pages/PlayCard';
import Order from '../pages/Order';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.PlayCard}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={ROUTES.Home} component={Home} />
      <Stack.Screen name={ROUTES.Akun} component={Akun} />
      <Stack.Screen name={ROUTES.Outlet} component={Outlet} />
      <Stack.Screen name={ROUTES.PlayCard} component={PlayCard} />
      <Stack.Screen name={ROUTES.Order} component={Order} />
    </Stack.Navigator>
  );
};
