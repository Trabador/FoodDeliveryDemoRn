import React from 'react';
import {FlatList} from 'react-native';
import {GET_DISHES} from '../../apollo/querys/restaurantQuerys';
import {useQuery} from '@apollo/client/react';
import DishRow from './DishRow';

const Dishes = ({id}) => {
  const {data, loading, error} = useQuery(GET_DISHES, {variables: {id: id}});

  if (loading) return null;
  if (error) return null;

  const renderDishes = ({item}) => (
    <DishRow
      id={id}
      title={item.attributes.title}
      imageUrl={item.attributes.image.data.attributes.url}
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
