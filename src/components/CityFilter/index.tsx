import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ScrollIndicator from 'react-native-custom-scroll-indicator';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';
import {COLORS} from '../../utils/colors';
import {useGetCitiesQuery} from '../../services/citiesApi';
import SearchBar from '../SearchBar';
import CitySkeleton from '../CitySkeleton';
import City from '../City';
import {Icity} from '../../typings/cities';
import {IRootState} from '../../stores';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const {grotesque20Bold, rowCenter, ph16, nunito12Bold, flex1, grotesque18Bold} =
  globalStyles;
const {
  filterContainer,
  searchBarContainer,
  horionztalLine,
  horionztalLineSeparator,
  cityContainer,
  notFound,
  scrollContainer,
  baseScrollBar,
  activeScrollBar,
  citiesScrollContainer,
} = styles;

const CityFilter = () => {
  const {data: cities, isLoading} = useGetCitiesQuery();

  const searchParams = useSelector(
    (state: IRootState) => state.cities.searchParams,
  );

  const filteredCities =
    Array.isArray(cities) &&
    cities.filter(({name}) => name.includes(searchParams));

  const showCustomScrollBar =
    Array.isArray(filteredCities) && filteredCities.length === 0
      ? 'none'
      : 'flex';

  return (
    <View style={filterContainer}>
      <Text style={[grotesque20Bold, {color: COLORS.indigoDye}]}>
        Mau main dimana?
      </Text>

      <View style={searchBarContainer}>
        <SearchBar />
      </View>

      <View style={[rowCenter, ph16]}>
        <View style={horionztalLine} />
        <Text style={[nunito12Bold, horionztalLineSeparator]}>atau</Text>
        <View style={horionztalLine} />
      </View>

      <ScrollIndicator
        viewBoxStyle={scrollContainer}
        indicatorBackgroundStyle={baseScrollBar}
        indicatorStyle={activeScrollBar}
        indicatorBoxStyle={{display: showCustomScrollBar}}
        scrollViewBoxStyle={citiesScrollContainer}>
        {isLoading && <CitySkeleton />}

        {Array.isArray(filteredCities) &&
          filteredCities.length > 0 &&
          filteredCities.map((city: Icity) => (
            <View key={city.name} style={cityContainer}>
              <City name={city.name} onPress={() => console.log(city)} />
            </View>
          ))}

        {Array.isArray(filteredCities) && filteredCities.length === 0 && (
          <Text style={[notFound, grotesque18Bold]}>Tidak ditemukan</Text>
        )}
      </ScrollIndicator>
    </View>
  );
};

export default CityFilter;
