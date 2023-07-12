import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';

const Outlet = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.pagesContainer}>
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={globalStyles.flex1}>
        <View>
          <Text>Outlet page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Outlet;
