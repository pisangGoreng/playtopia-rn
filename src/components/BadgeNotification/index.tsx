import React, {useState} from 'react';
import {View} from 'react-native';

import Button from '../Button';
import BellIcon from '../../assets/icons/svg/bell.svg';
import styles from './styles';

const {container, notifContainer, dotContainer} = styles;

const BadgeNotification: React.FC<any> = () => {
  const [haveNotif, setHaveNotif] = useState<boolean>(true);
  const display = haveNotif ? 'flex' : 'none';

  return (
    <Button
      activeOpacity={0.5}
      onPress={() => console.log('notif badge pressed')}>
      <View style={container}>
        <BellIcon />
      </View>

      <View style={[notifContainer, {display}]}>
        <View style={dotContainer} />
      </View>
    </Button>
  );
};

export default BadgeNotification;
