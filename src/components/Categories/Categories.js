import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, View} from 'react-native';
import {GET_CATEGORIES} from '../../apollo/querys/categoryQuery';
import {fromUrl} from '../../utils/utils';
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

  const dummy = [
    {
      title: 'test1',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test2',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test3',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test4',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test5',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test6',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test7',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test8',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
    {
      title: 'test9',
      imgUrl:
        'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg',
    },
  ];

  const renderDummy = ({item}) => (
    <CategoryCard title={item.title} imgUrl={item.imgUrl} />
  );

  return (
    <>
      <FlatList
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
        data={data.menuCategories.data}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Categories;
