import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Deliver} from '../components';
import {mainColor} from '../utils/constants';

const DeliveryScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{backgroundColor: mainColor}}
      className="flex-1 justify-center items-center">
      <Deliver />
    </SafeAreaView>
  );
};

export default DeliveryScreen;
