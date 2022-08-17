import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import {mainColor} from '../../../utils/constants';
import {fromUrl} from '../../../utils/utils';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, restaurants}) => {
  const renderRestaurants = ({item}) => (
    <RestaurantCard
      id={item.id}
      imgUrl={fromUrl(item.attributes.image.data.attributes.url)}
      title={item.attributes.name}
      rating={item.attributes.rating}
      genre={item.attributes.genre}
      address={item.attributes.address}
      short_description={item.attributes.short_desc}
      long={item.attributes.lon}
      lat={item.attributes.lat}
    />
  );

  return (
    <View>
      <View className="flex-row px-3">
        <View className="flex-1">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <ArrowRightIcon color={mainColor} />
      </View>
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        data={restaurants}
        renderItem={renderRestaurants}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FeaturedRow;
