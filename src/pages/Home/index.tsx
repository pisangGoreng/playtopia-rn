import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';
import PlayMiles from '../../components/PlayMiles';
import CityFilter from '../../components/CityFilter';
import BadgeNotification from '../../components/BadgeNotification';
import {COLORS} from '../../utils/colors';
import Banner from '../../components/Banner';

const {
  nunito12Bold,
  grotesque14Bold,
  grotesque20Bold,
  shadow,
  pagesContainer,
  flex1,
} = globalStyles;
const {
  contentContainer,
  searchSectionContainer,
  backgroundContainer,
  topContainer,
  bannerContainer,
} = styles;
const {carulean} = COLORS;

const banners = [
  {
    description: 'Grand Opening Playtopia Margonda Depok',
    buttonText: 'Beli Tiket',
    buttonColor: COLORS.pictonBlue,
    onPress: () => console.log('Check'),
  },
  {
    description: 'Potongan 50rb untuk pengguna Baru aplikasi',
    buttonText: 'Beli Tiket',
    buttonColor: COLORS.mexicanPink,
    onPress: () => console.log('Check'),
  },
];

const Home = (): JSX.Element => {
  const height = Dimensions.get('window').height + 50;

  return (
    <SafeAreaView style={pagesContainer}>
      <ScrollView style={flex1} contentContainerStyle={flex1}>
        <View style={[flex1, {height}]}>
          <ImageBackground
            source={require('../../assets/images/png/home-background.png')}
            resizeMode="cover"
            style={backgroundContainer}>
            <View style={topContainer}>
              <View>
                <Text style={[nunito12Bold, {color: carulean}]}>Hi,</Text>
                <Text style={[grotesque14Bold, {color: carulean}]}>
                  Cameron Williamson
                </Text>
              </View>

              <BadgeNotification />
            </View>

            <View style={contentContainer}>
              <View style={[shadow, searchSectionContainer]}>
                <PlayMiles xpValue={350} milesPoint={50000} />
                <CityFilter />
              </View>

              <View style={bannerContainer}>
                <Text style={[grotesque20Bold]}>Info & Promo</Text>

                <ScrollView
                  horizontal
                  style={styles.bannerScrollContainer}
                  showsHorizontalScrollIndicator={false}>
                  {banners.map((banner, index) => {
                    const {description, buttonText, buttonColor, onPress} =
                      banner;
                    return (
                      <View key={index} style={styles.bannerItemContainer}>
                        <Banner
                          imageUrl={require('../../assets/images/png/banner-1.png')}
                          description={description}
                          buttonText={buttonText}
                          buttonColor={buttonColor}
                          onPress={onPress}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
