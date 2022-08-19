import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect} from 'react';
import {SafeAreaView, Alert, BackHandler} from 'react-native';
import {Deliver} from '../components';
import {mainColor} from '../utils/constants';

const DeliveryScreen = () => {
  const navigation = useNavigation();

  const backAction = () => {
    Alert.alert('Processing delivery', 'Please wait', [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

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
