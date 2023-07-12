import React, {useRef} from 'react';
import {View, Pressable, TextInput, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyles from '../../assets/styles/globalStyles';
import styles from './styles';
import PlusIcon from '../../assets/icons/svg/plus.svg';
import CloseIcon from '../../assets/icons/svg/close.svg';
import SearchIcon from '../../assets/icons/svg/search.svg';
import {updateSearchParams} from '../../stores/citiesSlice';
import {IRootState} from '../../stores';

import Badge from '../Badge';
import Button from '../Button';
import {COLORS} from '../../utils/colors';

const {nunito14} = globalStyles;
const {container, badgeContainer, remove, search, textInput} = styles;

const SearchBar: React.FC<any> = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector(
    (state: IRootState) => state.cities.searchParams,
  );
  const refInput = useRef(null);

  return (
    <View style={container}>
      <Pressable onPress={() => refInput.current.focus()}>
        <SearchIcon />
      </Pressable>

      <TextInput
        ref={refInput}
        value={searchParams}
        onChangeText={text => dispatch(updateSearchParams(text))}
        style={[nunito14, textInput]}
        placeholder="Cari Lokasi Bermain"
        placeholderTextColor={COLORS.battleshipGray}
        onSubmitEditing={Keyboard.dismiss}
      />

      <View style={badgeContainer}>
        {searchParams.length === 0 ? (
          <Button onPress={() => refInput.current.blur()}>
            <Badge customStyle={search} isRounded={true}>
              <PlusIcon />
            </Badge>
          </Button>
        ) : (
          <Button
            onPress={() => {
              dispatch(updateSearchParams(''));
              refInput.current.focus();
            }}>
            <Badge customStyle={remove} isRounded={true}>
              <CloseIcon fill={COLORS.white} />
            </Badge>
          </Button>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
