import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES} from '../utils/routes';
import Home from '../pages/Home';
import Order from '../pages/Order';
import PlayCard from '../pages/PlayCard';
import Outlet from '../pages/Outlet';
import Akun from '../pages/Akun';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props: any) => {
  return <TabBar {...props} />;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Home}
      screenOptions={{header: () => null, headerShown: false}}
      tabBar={CustomTabBar}>
      <Tab.Screen name={ROUTES.Home} component={Home} />
      <Tab.Screen name={ROUTES.Order} component={Order} />
      <Tab.Screen name={ROUTES.PlayCard} component={PlayCard} />
      <Tab.Screen name={ROUTES.Outlet} component={Outlet} />
      <Tab.Screen name={ROUTES.Akun} component={Akun} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
