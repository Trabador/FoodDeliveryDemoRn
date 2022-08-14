import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import {mainColor} from '../../utils/constants';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description}) => {
  return (
    <View>
      <View className="flex-row mt-8 px-3">
        <View className="flex-1">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <ArrowRightIcon color={mainColor} />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCard
          id={123}
          imgUrl="https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg"
          title={'test'}
          rating={'5.0'}
          genre={'Japanese'}
          address={'123 main st'}
          short_description={'this is a test description'}
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg"
          title={'test'}
          rating={'5.0'}
          genre={'Japanese'}
          address={'123 main st'}
          short_description={'this is a test description'}
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg"
          title={'test'}
          rating={'5.0'}
          genre={'Japanese'}
          address={'123 main st'}
          short_description={'this is a test description'}
          dishes={[]}
          long={0}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
