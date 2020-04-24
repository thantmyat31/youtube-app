import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import NewsScreen from './../screens/news/news.screen';
import KnowledgeScreen from './../screens/knowledge/knowledge.screen';
import EntertainmentScreen from './../screens/entertainment/entertainment.screen';
import Color from './../constants/color.constants';
import VideoDetailsScreen from './../screens/video/video.screen';
import LandingScreen from './../screens/landing.screen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const TabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: Color.indicator,
				inactiveTintColor: 'gray',
				pressColor: Color.indicator,
				style: {
					backgroundColor: Color.primaryBg
				},
				indicatorStyle: {
					borderBottomColor: Color.indicator,
					borderBottomWidth: 3
				}
			}}
		>
			<Tab.Screen name="News" component={NewsScreen} />
			<Tab.Screen name="Knowledge" component={KnowledgeScreen} />
			<Tab.Screen name="Entertain" component={EntertainmentScreen} />
		</Tab.Navigator>
	);
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
			<Stack.Screen
				name="VideoDetails"
				component={VideoDetailsScreen}
				options={{
					title: 'Video Details',
					headerStyle: {
						backgroundColor: Color.primary
					},
					headerTintColor: '#ffffff'
				}}
			/>
		</Stack.Navigator>
	);
};

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	);
};

export default MainNavigator;
