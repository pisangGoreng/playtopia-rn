import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(58),
    width: '100%',
    borderRadius: scaleFontsSize(48),
    paddingVertical: verticalScale(8),
    paddingRight: horizontalScale(8),
    paddingLeft: horizontalScale(24),
    flexDirection: 'row',
    backgroundColor: COLORS.azure,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: COLORS.battleshipGray,
    marginHorizontal: horizontalScale(5),
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    size: horizontalScale(38),
    backgroundColor: COLORS.pictonBlue,
  },
  remove: {
    size: horizontalScale(38),
    backgroundColor: COLORS.lavenderPink,
  },
});

export default styles;
