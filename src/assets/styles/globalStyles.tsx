import {StyleSheet} from 'react-native';

import {horizontalScale, scaleFontsSize} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const globalStyles = StyleSheet.create({
  flex1: {
    flexGrow: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ph16: {
    paddingHorizontal: horizontalScale(16),
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.62,
    elevation: 8,
  },
  // * GROTESQUE
  grotesque14: {
    fontFamily: 'DarkerGrotesque-Regular',
    fontSize: scaleFontsSize(14),
    fontWeight: '400',
    color: COLORS.black,
  },
  grotesque14Bold: {
    fontFamily: 'DarkerGrotesque-Regular',
    fontSize: scaleFontsSize(14),
    fontWeight: '700',
    color: COLORS.black,
  },
  grotesque18Bold: {
    fontFamily: 'DarkerGrotesque-Regular',
    fontSize: scaleFontsSize(18),
    fontWeight: '700',
    color: COLORS.black,
  },
  grotesque20Bold: {
    fontFamily: 'DarkerGrotesque-Regular',
    fontSize: scaleFontsSize(20),
    fontWeight: '700',
    color: COLORS.black,
  },
  // * NUNITO
  nunito10: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: scaleFontsSize(10),
    fontWeight: '400',
    color: COLORS.black,
  },
  nunito10Bold: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: scaleFontsSize(10),
    fontWeight: '700',
    color: COLORS.black,
  },
  nunito12: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: scaleFontsSize(12),
    fontWeight: '400',
    color: COLORS.black,
  },
  nunito12Bold: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: scaleFontsSize(12),
    fontWeight: '700',
    color: COLORS.black,
  },
  nunito14: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: scaleFontsSize(14),
    fontWeight: '400',
    color: COLORS.black,
  },
});

export default globalStyles;
