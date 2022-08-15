import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, View} from 'react-native';
import {GET_FEATURED} from '../../apollo/querys/featuredQuerys';
import FeaturedRow from './FeaturedRow';

const Featured = () => {
  const {data, loading, error} = useQuery(GET_FEATURED);

  if (loading) return null;
  if (error) return null;

  const renderFeatures = ({item}) => (
    <FeaturedRow
      title={item.attributes.title}
      description={item.attributes.short_desc}
      restaurants={item.attributes.restaurants.data}
    />
  );

  return (
    <>
      <FlatList
        data={data.featuredCategories.data}
        renderItem={renderFeatures}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Featured;
