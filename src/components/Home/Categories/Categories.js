import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList} from 'react-native';
import {GET_CATEGORIES} from '../../../apollo/querys/categoryQuery';
import {fromUrl} from '../../../utils/utils';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const {data, loading, error} = useQuery(GET_CATEGORIES);

  if (loading) return null;
  if (error) return null;

  const renderCategories = ({item}) => (
    <CategoryCard
      title={item.attributes.title}
      imgUrl={fromUrl(item.attributes.image.data.attributes.url)}
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
