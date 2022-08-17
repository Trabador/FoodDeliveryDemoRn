import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const DeliveryScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>delivery</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
