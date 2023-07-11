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
import globalStyles from '../../assets/styles/globalStyles';
import PlayMiles from '../../components/PlayMiles';
import CityFilter from '../../components/CityFilter';

const {width, height} = Dimensions.get('window');

const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F3F3'}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, height: height + 50}}>
          <ImageBackground
            source={require('../../assets/images/png/home-background.png')}
            resizeMode="cover"
            style={styles.backgroundContainer}>
            <View style={styles.contentContainer}>
              <View
                style={[globalStyles.shadow, styles.searchSectionContainer]}>
                <View style={globalStyles.ph16}>
                  <PlayMiles xpValue={350} milesPoint={50000} />
                </View>

                <CityFilter />
              </View>

              {/* <View style={styles.bannerContainer}>
                <Text style={[globalStyles.grotesque20Bold]}>Info & Promo</Text>
              </View> */}
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
