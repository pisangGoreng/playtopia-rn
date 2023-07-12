import {StyleSheet, Dimensions} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: verticalScale(190),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: horizontalScale(16),
    marginHorizontal: horizontalScale(16),
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(16),
    alignSelf: 'center',
    top: verticalScale(92),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  searchSectionContainer: {
    width: '100%',
    borderRadius: scaleFontsSize(24),
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(16),
  },

  bannerContainer: {
    width: '100%',
    marginTop: verticalScale(32),
  },
  bannerScrollContainer: {
    marginTop: verticalScale(16),
    flexDirection: 'row',
  },
  bannerItemContainer: {
    marginRight: horizontalScale(16),
  },
});

export default styles;
