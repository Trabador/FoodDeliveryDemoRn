import React from 'react';
import {ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RestaurantsListSkeleton = () => {
  const RestaurantItemSkeleton = () => (
    <SkeletonPlaceholder>
      <View>
        <View style={{height: 170, width: '100%', marginBottom: 10}} />
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <ScrollView contentContainerStyle={{padding: 10}}>
      <RestaurantItemSkeleton />
      <RestaurantItemSkeleton />
      <RestaurantItemSkeleton />
    </ScrollView>
  );
};

export default RestaurantsListSkeleton;
