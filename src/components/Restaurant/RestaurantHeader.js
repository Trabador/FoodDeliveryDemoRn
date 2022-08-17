import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import {mainColor} from '../../utils/constants';

const RestaurantHeader = ({
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  navigation,
}) => {
  return (
    <View className="relative">
      <Image source={{uri: imgUrl}} className="w-full h-56" />
      <TouchableOpacity
        className="absolute top-3 left-2 bg-gray-100 rounded-full px-2 py-2"
        onPress={navigation.goBack}>
        <ArrowLeftIcon color={mainColor} size={22} />
      </TouchableOpacity>
      <View className="px-3 mt-2">
        <Text className="font-bold text-3xl">{title}</Text>
        <View className="my-1">
          <View className="flex-row mt-1">
            <StarIcon size={22} opacity={0.5} color={mainColor} />
            <Text>
              {rating} - {genre}
            </Text>
          </View>
          <View className="flex-row mt-1">
            <LocationMarkerIcon color={mainColor} />
            <Text>Nearby {address}</Text>
          </View>
        </View>
        <Text className="mt-1 text-justify">{short_description}</Text>
      </View>

      <Text className="px-4 mt-3 text-xl font-bold">Menu</Text>
    </View>
  );
};

export default RestaurantHeader;
