import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import HeartRotate from '../../assets/icons/svg/heart-rotate.svg';

type ProgressBarProps = {
  percent: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({percent}) => {
  return (
    <>
      <View style={styles.primaryBar} testID="primary-bar" />
      <View
        style={[styles.progressBar, {width: `${percent}%`}]}
        testID="progress-bar">
        <HeartRotate testID="icon-progress-bar" />
      </View>
    </>
  );
};

export default ProgressBar;
