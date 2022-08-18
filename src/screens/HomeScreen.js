import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Categories, Featured, Header, Search} from '../components';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-gray-100">
      <Header />
      <Search />
      <FlatList
        contentContainerStyle={{paddingBottom: 250}}
        ListHeaderComponent={<Categories />}
        ListFooterComponent={<Featured />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
