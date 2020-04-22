import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';

const NewsScreen = () => {
	return (
		<ThemeWrapper>
			<View style={styles.screen}>
				<Text>News Screen</Text>
			</View>
		</ThemeWrapper>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default NewsScreen;
