import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LocationMarkerIcon, StarIcon} from 'react-native-heroicons/outline';
import {mainColor} from '../../../utils/constants';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  long,
  lat,
}) => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      className="mr-3 bg-white rounded px-2 pt-1 shadow-md mb-3"
      style={{shadowColor: 'gray', shadowRadius: 20, elevation: 20}}
      onPress={() =>
        navigator.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          long,
          lat,
        })
      }>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={mainColor} opacity={0.5} size={22} />
          <Text>
            {rating} - {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color={'gray'} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
