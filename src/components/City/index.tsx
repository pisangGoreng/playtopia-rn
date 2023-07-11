import React from 'react';
import {Text, Image} from 'react-native';

import styles from './styles';
import globalStyles from '../../assets/styles/globalStyles';
import Button from '../Button';

type CityProps = {
  name: string;
  onPress: () => void;
};

const City: React.FC<CityProps> = ({name, onPress}) => {
  return (
    <Button style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/png/jakarta.png')}
        style={styles.image}
        testID="city-image"
        accessibilityRole="image"
      />
      <Text style={[globalStyles.grotesque14Bold]} testID={name}>
        {name}
      </Text>
    </Button>
  );
};

export default City;
