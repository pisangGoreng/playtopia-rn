import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

const {width, height} = Dimensions.get('window');

const Home = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View>
            <Text>as</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
