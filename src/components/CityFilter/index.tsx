import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';
import {COLORS} from '../../utils/colors';
import {useGetCitiesQuery} from '../../services/citiesApi';
import {Icity} from '../../typings/cities';

// Components
import SearchBar from '../SearchBar';
import CitySkeleton from '../CitySkeleton';
import City from '../City';

const {grotesque20Bold, rowCenter, ph16, nunito12Bold, flex1, grotesque18Bold} =
  globalStyles;
const {
  filterContainer,
  searchBarContainer,
  horionztalLine,
  horionztalLineSeparator,
  citiesContainer,
  cityContainer,
  notFoundContainer,
} = styles;

const CityFilter = () => {
  const {data: cities, isLoading} = useGetCitiesQuery();

  const searchParams = useSelector(({cities}) => cities.searchParams);

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
        <View style={horionztalLineSeparator}>
          <Text style={[nunito12Bold, {color: COLORS.battleshipGray}]}>
            atau
          </Text>
        </View>
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
          <View style={notFoundContainer}>
            <Text style={[grotesque18Bold, {color: COLORS.indigoDye}]}>
              Tidak ditemukan
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CityFilter;
