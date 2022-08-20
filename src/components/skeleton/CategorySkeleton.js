import React from 'react';
import {ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CategorySkeleton = () => {
  const CategoryCardSkeleton = () => (
    <SkeletonPlaceholder>
      <View>
        <View
          style={{width: 80, height: 80, borderRadius: 3, marginRight: 10}}
        />
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 15,
      }}
      showsHorizontalScrollIndicator={false}>
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
    </ScrollView>
  );
};

export default CategorySkeleton;
