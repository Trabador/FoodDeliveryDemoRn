import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList} from 'react-native';
import {GET_CATEGORIES} from '../../../apollo/querys/categoryQuery';
import {defaultImageUrl} from '../../../utils/constants';
import {CategorySkeleton} from '../../../components';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const {data, loading, error} = useQuery(GET_CATEGORIES);

  if (loading) return <CategorySkeleton />;
  if (error) return null;

  const renderCategories = ({item}) => (
    <CategoryCard
      id={item.id}
      title={item.attributes.title}
      imgUrl={item.attributes.image.data?.attributes.url || defaultImageUrl}
    />
  );

  return (
    <>
      <FlatList
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
          marginTop: 10,
          marginBottom: 15,
        }}
        showsHorizontalScrollIndicator={false}
        data={data.menuCategories.data}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Categories;
