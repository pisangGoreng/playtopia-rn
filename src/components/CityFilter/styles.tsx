import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  filterContainer: {
    marginTop: verticalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    marginVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
  },
  horionztalLineSeparator: {
    marginHorizontal: horizontalScale(8),
    color: COLORS.battleshipGray,
  },
  horionztalLine: {
    borderBottomColor: COLORS.platinum,
    borderBottomWidth: 1,
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: verticalScale(20),
  },
  cityContainer: {
    marginRight: horizontalScale(16),
  },
  citiesScrollContainer: {
    paddingLeft: horizontalScale(16),
    width: '100%',
    flexDirection: 'row',
  },
  baseScrollBar: {
    height: verticalScale(6),
    width: horizontalScale(48),
    borderRadius: 5,
    backgroundColor: COLORS.whiteSmoke,
  },
  activeScrollBar: {
    height: verticalScale(6),
    width: horizontalScale(9),
    borderRadius: 4,
    backgroundColor: COLORS.pictonBlue,
  },
  notFound: {
    height: verticalScale(123.5),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.indigoDye,
  },
});

export default styles;
