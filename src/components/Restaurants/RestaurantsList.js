import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList} from 'react-native';
import {GET_RESTAURANT_BY_CAT} from '../../apollo/querys/restaurantQuerys';
import {defaultImageUrl} from '../../utils/constants';
import RestaurantCard from '../Home/Featured/RestaurantCard';
import {RestaurantsListSkeleton} from '../../components';

const RestaurantsList = ({id}) => {
  const {data, loading, error} = useQuery(GET_RESTAURANT_BY_CAT, {
    variables: {id: id},
  });

  if (loading) return <RestaurantsListSkeleton />;
  if (error) return null;

  const renderRestaurantList = ({item}) => {
    const {name, rating, genre, address, short_desc, lon, lat} =
      item.attributes;
    const url = item.attributes.image.data?.attributes.url || defaultImageUrl;
    return (
      <RestaurantCard
        id={item.id}
        imgUrl={url}
        title={name}
        rating={rating}
        genre={genre}
        address={address}
        short_description={short_desc}
        long={lon}
        lat={lat}
        large={true}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{padding: 15}}
      data={data.restaurants.data}
      renderItem={renderRestaurantList}
      keyExtractor={item => item.id}
    />
  );
};

export default RestaurantsList;
