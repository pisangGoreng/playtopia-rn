import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    height: horizontalScale(32),
    width: horizontalScale(32),
    borderRadius: horizontalScale(32),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifContainer: {
    height: horizontalScale(10),
    width: horizontalScale(10),
    borderRadius: horizontalScale(10),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  dotContainer: {
    height: horizontalScale(6),
    width: horizontalScale(6),
    borderRadius: horizontalScale(6),
    backgroundColor: COLORS.red,
  },
});

export default styles;
