import React from 'react';
import {ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
      showsHorizontalScrollIndicator={false}>
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 2'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 3'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 3'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 3'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 3'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 3'}
      />
      <CategoryCard
        imgUrl={
          'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
        }
        title={'test 3'}
      />
    </ScrollView>
  );
};

export default Categories;
