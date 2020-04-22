import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewsScreen from './../screens/news/news.screen';
import KnowledgeScreen from './../screens/knowledge/knowledge.screen';
import EntertainmentScreen from './../screens/entertainment/entertainment.screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from './../constants/color.constants';

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Color.indicator,
          inactiveTintColor: 'gray',
          pressColor: Color.indicator,
          style: {
            backgroundColor: Color.primaryBg,
          },
          indicatorStyle: {
            borderBottomColor: Color.indicator,
            borderBottomWidth: 3,
          },
        }}>
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Knowledge" component={KnowledgeScreen} />
        <Tab.Screen name="Entertain" component={EntertainmentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
