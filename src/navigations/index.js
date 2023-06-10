import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import useNavigationController from '../view-controllers/useNavigationController';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import PlaylistDetail from '../screens/PlaylistDetail';
import TrackDetail from '../screens/TrackDetail';
const Stack = createStackNavigator();
const Navigations = () => {
  const {isLoading, isError} = useNavigationController();
  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PlaylistDetail"
          component={PlaylistDetail}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen name="TrackDetail" component={TrackDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
