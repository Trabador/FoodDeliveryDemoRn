import React from 'react';
import {ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const FeaturedSkeleton = () => {
  const RestaurantCardSkeleton = () => (
    <SkeletonPlaceholder>
      <View>
        <View
          style={{
            width: 256,
            height: 144,
            borderRadius: 5,
            marginRight: 10,
            marginBottom: 5,
          }}
        />
        <View style={{width: 200, height: 30, borderRadius: 3}} />
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <ScrollView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCardSkeleton />
        <RestaurantCardSkeleton />
      </ScrollView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCardSkeleton />
        <RestaurantCardSkeleton />
      </ScrollView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCardSkeleton />
        <RestaurantCardSkeleton />
      </ScrollView>
    </ScrollView>
  );
};

export default FeaturedSkeleton;
