import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const PlayCard = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text>Play card page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayCard;
