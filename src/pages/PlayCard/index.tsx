import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';

const PlayCard = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.pagesContainer}>
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={globalStyles.flex1}>
        <View>
          <Text>PlayCard page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PlayCard;
