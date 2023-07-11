import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {COLORS} from '../../utils/colors';
import globalStyles from '../../assets/styles/globalStyles';

import ProgressBar from '../ProgressBar';
import Badge from '../Badge';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import BadgeIcon from '../../assets/icons/svg/badge.svg';
import ArrowRight from '../../assets/icons/svg/arrow-right.svg';
import Button from '../Button';

type PlayMilesProps = {
  xpValue: number;
  milesPoint: number;
};

const PlayMiles: React.FC<PlayMilesProps> = ({xpValue, milesPoint}) => {
  return (
    <View style={styles.playMilesContainer}>
      <View
        style={[
          styles.playMilesItemContainer,
          styles.playMilesItemContainerLeft,
        ]}>
        <Text style={[globalStyles.nunito10, {color: COLORS.indigoDye}]}>
          <Text style={globalStyles.nunito10Bold} testID="value-play-miles">
            {xpValue} XP
          </Text>{' '}
          lagi jadi playlover
        </Text>

        <View style={styles.progressContainer}>
          <ProgressBar percent={25} />
        </View>
      </View>

      <View
        style={[
          styles.playMilesItemContainer,
          styles.playMilesItemContainerRight,
        ]}>
        <View style={globalStyles.rowCenter}>
          <Badge
            isRounded={true}
            customStyle={{
              size: horizontalScale(24),
              backgroundColor: COLORS.schoolBusYellow,
            }}>
            <BadgeIcon fill={COLORS.fieldDrab} />
          </Badge>

          <View style={styles.textMilesContainer}>
            <Text style={[globalStyles.nunito10, {color: COLORS.tyrianPurple}]}>
              PLAY MILES
            </Text>
            <Text
              testID="value-miles-point"
              style={[globalStyles.nunito12Bold, {color: COLORS.tyrianPurple}]}>
              {milesPoint}
            </Text>
          </View>
        </View>

        <Button
          activeOpacity={0.5}
          onPress={() => console.log('Button Pressed')}>
          <ArrowRight fill={COLORS.murrey} />
        </Button>
      </View>
    </View>
  );
};

export default PlayMiles;
