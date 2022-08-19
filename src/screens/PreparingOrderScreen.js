import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Alert, BackHandler} from 'react-native';
import {mainColor} from '../utils/constants';
import {Order} from '../components';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  const backAction = () => {
    Alert.alert('Processing payment', 'Please wait', [
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
    const timeOut = setTimeout(() => {
      navigation.navigate('Delivery');
    }, 5000);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <SafeAreaView
      style={{backgroundColor: mainColor}}
      className="flex-1 justify-center items-center">
      <Order />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
