import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  playMilesContainer: {
    width: '100%',
    height: verticalScale(44),
    borderRadius: scaleFontsSize(12),
    flexDirection: 'row',
  },
  playMilesItemContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(12),
    paddingTop: verticalScale(4),
    paddingBottom: verticalScale(4),
  },
  playMilesItemContainerLeft: {
    backgroundColor: COLORS.paleAzure,
    borderTopLeftRadius: scaleFontsSize(12),
    borderBottomLeftRadius: scaleFontsSize(12),
  },
  playMilesItemContainerRight: {
    backgroundColor: COLORS.lavenderPink,
    borderTopRightRadius: scaleFontsSize(12),
    borderBottomRightRadius: scaleFontsSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressContainer: {
    marginTop: verticalScale(4),
  },
  textMilesContainer: {
    marginLeft: verticalScale(8),
  },
});

export default styles;
