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
    flex: 1,
    width,
    height: verticalScale(190),
    // backgroundColor: 'red',
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
    // position: 'absolute',
    // zIndex: 10,

    alignSelf: 'center',
    top: verticalScale(153),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    // backgroundColor: COLORS.pictonBlue,
    // height: 3000,
    width: '100%',
  },
  searchSectionContainer: {
    // flex: 1,
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
