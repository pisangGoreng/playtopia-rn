import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {COLORS} from '../../utils/colors';
import globalStyles from '../../assets/styles/globalStyles';

import ProgressBar from '../ProgressBar';
import Badge from '../Badge';
import {horizontalScale} from '../../utils/scaling';
import BadgeIcon from '../../assets/icons/svg/badge.svg';
import ArrowRight from '../../assets/icons/svg/arrow-right.svg';
import Button from '../Button';

const {nunito10, nunito10Bold, nunito12Bold, rowCenter} = globalStyles;
const {
  playMilesContainer,
  playMilesItemContainer,
  playMilesItemContainerLeft,
  progressContainer,
  playMilesItemContainerRight,
  textMilesContainer,
} = styles;
const {tyrianPurple, schoolBusYellow, indigoDye, fieldDrab, murrey} = COLORS;

type PlayMilesProps = {
  xpValue: number;
  milesPoint: number;
};

const PlayMiles: React.FC<PlayMilesProps> = ({xpValue, milesPoint}) => {
  return (
    <View style={playMilesContainer}>
      <View style={[playMilesItemContainer, playMilesItemContainerLeft]}>
        <Text style={[nunito10, {color: indigoDye}]}>
          <Text style={nunito10Bold} testID="value-play-miles">
            {xpValue} XP
          </Text>{' '}
          lagi jadi playlover
        </Text>

        <View style={progressContainer}>
          <ProgressBar percent={25} />
        </View>
      </View>

      <View style={[playMilesItemContainer, playMilesItemContainerRight]}>
        <View style={rowCenter}>
          <Badge
            isRounded={true}
            customStyle={{
              size: horizontalScale(24),
              backgroundColor: schoolBusYellow,
            }}>
            <BadgeIcon fill={fieldDrab} />
          </Badge>

          <View style={textMilesContainer}>
            <Text style={[nunito10, {color: tyrianPurple}]}>PLAY MILES</Text>
            <Text
              testID="value-miles-point"
              style={[nunito12Bold, {color: tyrianPurple}]}>
              {milesPoint}
            </Text>
          </View>
        </View>

        <Button
          activeOpacity={0.5}
          onPress={() => console.log('Button Pressed')}>
          <ArrowRight fill={murrey} />
        </Button>
      </View>
    </View>
  );
};

export default PlayMiles;
