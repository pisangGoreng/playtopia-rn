import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {ROUTES} from '../../utils/routes';
import {COLORS} from '../../utils/colors';
import Home from '../../assets/icons/svg/home.svg';
import Order from '../../assets/icons/svg/order.svg';
import Outlet from '../../assets/icons/svg/outlet.svg';
import Akun from '../../assets/icons/svg/akun.svg';
import PlayCard from '../../assets/icons/svg/playCard.svg';
import globalStyles from '../../assets/styles/globalStyles';
import {verticalScale} from '../../utils/scaling';

const {nunito12} = globalStyles;
const {
  tabBarContainer,
  buttonContainer,
  iconContainer,
  iconTabContainer,
  iconTabContainerPlayCard,
} = styles;

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabColor = isFocused ? COLORS.pictonBlue : COLORS.azure;
        const iconColor = isFocused ? COLORS.white : COLORS.prussianBLue;
        const textColor = isFocused ? COLORS.pictonBlue : COLORS.battleshipGray;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={buttonContainer}>
            <View
              style={[
                iconContainer,
                label === ROUTES.PlayCard && {marginBottom: verticalScale(5)},
              ]}>
              <View
                style={[
                  iconTabContainer,
                  {backgroundColor: tabColor},
                  label === ROUTES.PlayCard && iconTabContainerPlayCard,
                ]}>
                {label === ROUTES.Home && <Home fill={iconColor} />}

                {label === ROUTES.Order && <Order fill={iconColor} />}

                {label === ROUTES.Outlet && <Outlet fill={iconColor} />}

                {label === ROUTES.Akun && <Akun fill={iconColor} />}

                {label === ROUTES.PlayCard && <PlayCard fill={COLORS.white} />}
              </View>
            </View>

            <Text
              style={[
                nunito12,
                {
                  color:
                    label === ROUTES.PlayCard ? COLORS.mexicanPink : textColor,
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
