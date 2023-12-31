import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(16),
    paddingBottom: verticalScale(8),
    paddingTop: verticalScale(7),
    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    width: horizontalScale(64),
    height: horizontalScale(64),
    flex: 1,
    marginLeft: horizontalScale(2),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: verticalScale(8),
    alignSelf: 'center',
  },
  iconTabContainer: {
    width: horizontalScale(32),
    height: horizontalScale(32),
    borderRadius: horizontalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabContainerPlayCard: {
    backgroundColor: COLORS.mexicanPink,
    width: horizontalScale(40),
    height: horizontalScale(40),
    borderRadius: horizontalScale(20),
  },
});

export default styles;
