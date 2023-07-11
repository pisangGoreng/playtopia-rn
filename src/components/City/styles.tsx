import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(107),
    height: verticalScale(105),
    backgroundColor: COLORS.aliceBlue,
    borderRadius: horizontalScale(16),
    padding: horizontalScale(12),
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(48),
    height: horizontalScale(48),
    borderRadius: horizontalScale(24),
  },
});

export default styles;
