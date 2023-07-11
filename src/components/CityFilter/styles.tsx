import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  filterContainer: {
    marginTop: verticalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  searchBarContainer: {
    marginVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
  },
  horionztalLineSeparator: {
    marginHorizontal: horizontalScale(8),
  },
  horionztalLine: {
    borderBottomColor: COLORS.platinum,
    borderBottomWidth: 1,
    flex: 1,
  },
  citiesContainer: {
    marginTop: verticalScale(12),
    marginLeft: horizontalScale(16),
  },
  cityContainer: {
    marginRight: horizontalScale(16),
  },
  notFoundContainer: {
    // width: horizontalScale(107),
    flex: 1,
    height: verticalScale(105),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
