import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';

const MembershipDetails = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.pagesContainer}>
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={globalStyles.flex1}>
        <View>
          <Text>MembershipDetails page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipDetails;
