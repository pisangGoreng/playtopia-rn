import React from 'react';
import {View} from 'react-native';

import styles from './styles';

type BadgeProps = {
  isRounded: boolean;
  customStyle: {
    size: number;
    backgroundColor: string;
  };
  children: JSX.Element;
};

const Badge: React.FC<BadgeProps> = ({customStyle, isRounded, children}) => {
  const {size, backgroundColor} = customStyle;
  return (
    <View
      testID="badge-container"
      style={[
        styles.center,
        {width: size, height: size, backgroundColor},
        isRounded && {borderRadius: size / 2},
      ]}>
      {children}
    </View>
  );
};

export default Badge;
