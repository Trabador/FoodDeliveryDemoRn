import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Categories, Header, Search} from '../components';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <Header />
      <Search />
      <ScrollView>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

/* const HomeScreen = () => {
  const {objectTest, addNewObject, removeObject} = useTestStore(state => state);
  const size = useTestStore(selectSize);
  const total = useTestStore(selectTotal);
  const use

  const renderItems = ({item}) => {
    return <Text>{item.content}</Text>;
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-200">
      <Text className="text-lg font-bold">prueba</Text>
      <TouchableOpacity onPress={addNewObject}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={removeObject}>
        <Text>Remove</Text>
      </TouchableOpacity>
      <Text>Number of items: {size}</Text>
      <Text>Total: {total}</Text>
      <FlatList data={objectTest} renderItem={renderItems} />
    </SafeAreaView>
  );
}; */

export default HomeScreen;