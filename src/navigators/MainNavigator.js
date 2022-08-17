import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BasketScreen,
  HomeScreen,
  RestaurantScreen,
  PreparingOrderScreen,
  DeliveryScreen,
} from '../screens';
import {TailwindProvider} from 'tailwindcss-react-native';
import {ApolloProvider} from '@apollo/client/react';
import client from '../apollo/client';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <ApolloProvider client={client}>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{presentation: 'modal', headerShown: false}}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
            <Stack.Screen name="Delivery" component={DeliveryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </ApolloProvider>
  );
};

export default MainNavigator;
