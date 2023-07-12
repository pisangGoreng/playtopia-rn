import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';
import {COLORS} from '../../utils/colors';
import {useGetCitiesQuery} from '../../services/citiesApi';
import SearchBar from '../SearchBar';
import CitySkeleton from '../CitySkeleton';
import City from '../City';
import {Icity} from '../../typings/cities';
import {IRootState} from '../../stores';

const {grotesque20Bold, rowCenter, ph16, nunito12Bold, flex1, grotesque18Bold} =
  globalStyles;
const {
  filterContainer,
  searchBarContainer,
  horionztalLine,
  horionztalLineSeparator,
  citiesContainer,
  cityContainer,
  notFound,
} = styles;

const CityFilter = () => {
  const {data: cities, isLoading} = useGetCitiesQuery();

  const searchParams = useSelector(
    (state: IRootState) => state.cities.searchParams,
  );

  const filteredCities =
    Array.isArray(cities) &&
    cities.filter(({name}) => name.includes(searchParams));

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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={citiesContainer}
        contentContainerStyle={flex1}>
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
      </ScrollView>
    </View>
  );
};

export default CityFilter;
