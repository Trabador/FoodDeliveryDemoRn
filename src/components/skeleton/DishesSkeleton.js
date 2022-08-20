import React from 'react';
import {ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const DishesSkeleton = () => {
  const DishRowSkeleton = () => (
    <SkeletonPlaceholder>
      <View>
        <View style={{height: 100, width: 350, marginBottom: 4}} />
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
      <DishRowSkeleton />
      <DishRowSkeleton />
      <DishRowSkeleton />
      <DishRowSkeleton />
      <DishRowSkeleton />
      <DishRowSkeleton />
      <DishRowSkeleton />
    </ScrollView>
  );
};

export default DishesSkeleton;
