import React from 'react';
import {FlatList} from 'react-native';
import {GET_DISHES} from '../../../apollo/querys/restaurantQuerys';
import {useQuery} from '@apollo/client/react';
import DishRow from './DishRow';
import {defaultImageUrl} from '../../../utils/constants';
import {DishesSkeleton} from '../../../components';

const Dishes = ({id, name}) => {
  const {data, loading, error} = useQuery(GET_DISHES, {variables: {id: id}});

  if (loading) return <DishesSkeleton />;
  if (error) return null;

  const renderDishes = ({item}) => (
    <DishRow
      id={id}
      name={name}
      title={item.attributes.title}
      imageUrl={item.attributes.image.data?.attributes.url || defaultImageUrl}
      short_desc={item.attributes.short_desc}
      price={item.attributes.price}
    />
  );

  return (
    <FlatList
      className="px-5"
      data={data.restaurant.data.attributes.dishes.data}
      renderItem={renderDishes}
      keyExtractor={item => item.id}
    />
  );
};

export default Dishes;
