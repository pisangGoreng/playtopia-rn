import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

const MembershipDetails = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text>MembershipDetails page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipDetails;
