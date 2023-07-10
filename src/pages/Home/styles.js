import {StyleSheet, Dimensions} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer: {
    width,
    height: verticalScale(225),
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(16),
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'center',
    top: verticalScale(162),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.pictonBlue,
    // height: 3000,
  },
  searchSectionContainer: {
    width: '100%',
    // height: verticalScale(354),
    // height: verticalScale(1654),
    borderRadius: scaleFontsSize(24),
    backgroundColor: COLORS.white,
    // backgroundColor: 'red',
    paddingVertical: verticalScale(16),
  },

  bannerContainer: {
    width: '100%',
    marginTop: verticalScale(32),
    // backgroundColor: 'red',
    marginBottom: 100,
  },
  bannerScrollContainer: {
    marginVertical: verticalScale(16),
    flexDirection: 'row',
  },
  bannerItemContainer: {
    marginRight: horizontalScale(16),
  },
});

export default styles;
