import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';

const KnowledgeScreen = () => {
	return (
		<ThemeWrapper>
			<View style={styles.screen}>
				<Text>Knowledge Screen</Text>
			</View>
		</ThemeWrapper>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default KnowledgeScreen;
