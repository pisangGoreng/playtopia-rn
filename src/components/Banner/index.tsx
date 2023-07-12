import React, {useRef, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
// import PropTypes from 'prop-types';

import styles from './styles';
import {COLORS} from '../../utils/colors';
import globalStyles from '../../assets/styles/globalStyles';
import Button from '../Button';
import {horizontalScale} from '../../utils/scaling';

const {grotesque18Bold, nunito10} = globalStyles;
const {container, backgroundContainer, descriptionContainer, buttonContainer} =
  styles;

type BannerProps = {
  imageUrl: any;
  description: string;
  buttonText: string;
  buttonColor: string;
  onPress: () => void;
};

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  description,
  buttonText,
  buttonColor,
  onPress,
}) => {
  return (
    <View style={container}>
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        style={backgroundContainer}
        imageStyle={{borderRadius: horizontalScale(24)}}>
        <View style={descriptionContainer}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={[grotesque18Bold, {color: COLORS.white}]}
            testID="description">
            {description}
          </Text>
        </View>

        <Button
          style={[buttonContainer, {backgroundColor: buttonColor}]}
          activeOpacity={0.5}
          onPress={onPress}>
          <Text style={[nunito10, {color: COLORS.white}]} testID="button-text">
            {buttonText}
          </Text>
        </Button>
      </ImageBackground>
    </View>
  );
};

export default Banner;
