import React from 'react';
import {Pressable} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {Image, Text} from '@components';

import {PrimaryParamList} from '@navigation';

import {CountryDetailsItem} from '@services/api';

import homePageStyles from './styles';
import {useAppTheme} from '@themes';

export type CountryListItem = {
  item: CountryDetailsItem;
};

const CountryListItem = ({item}: CountryListItem) => {
  const {theme} = useAppTheme();
  const navigation = useNavigation<NavigationProp<PrimaryParamList>>();
  const {pressable, countryNameText} = homePageStyles(theme);

  return (
    <Pressable
      style={({pressed}) => [
        pressable,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={() => {
        navigation.navigate('DetailScreen', {
          selectedCountry: item,
        });
      }}>
      <Image source={{uri: item.flags!!.png}} size={'lg'} />
      <Text variant="bodyMedium" style={countryNameText} numberOfLines={2}>
        {item.name.common}
      </Text>
    </Pressable>
  );
};

export default CountryListItem;
