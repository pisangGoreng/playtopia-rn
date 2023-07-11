import React, {useCallback} from 'react';
import {Pressable as RNPressable} from 'react-native';

type ButtonProps = {
  style?: {};
  activeOpacity?: number;
  children: JSX.Element | JSX.Element[];
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  activeOpacity = 0.5,
  ...otherProps
}) => {
  const _style = useCallback(
    ({pressed}) => [{opacity: pressed ? activeOpacity : 1}, style && style],
    [activeOpacity, style],
  );

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
};

export default Button;
