import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(297),
    height: verticalScale(152),
    borderRadius: horizontalScale(24),
    backgroundColor: 'green',
  },
  backgroundContainer: {
    backgroundColor: 'blue',
    flex: 1,
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(23),
    paddingHorizontal: horizontalScale(24),
    borderRadius: horizontalScale(24),
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    width: horizontalScale(172),
    // backgroundColor: COLORS.pictonBlue,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.pictonBlue,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    borderRadius: horizontalScale(50),
  },
});

export default styles;
