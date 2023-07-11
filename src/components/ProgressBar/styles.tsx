import {StyleSheet} from 'react-native';
import {scaleFontsSize, verticalScale} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  primaryBar: {
    height: verticalScale(12),
    width: '100%',
    borderRadius: scaleFontsSize(8),
    backgroundColor: COLORS.skyBlue,
  },
  progressBar: {
    height: verticalScale(12),
    width: '25%',
    borderRadius: scaleFontsSize(8),
    backgroundColor: COLORS.pictonBlue,
    position: 'absolute',
  },
});

export default styles;
