import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

const Outlet = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text>Outlet page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Outlet;
