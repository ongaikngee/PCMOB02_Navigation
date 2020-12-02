import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';

function HomeScreen({ navigation }) {
	const [ count, setCount ] = useState(0);

	const increase = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<View style={styles.container} onStartShouldSetResponder={increase}>
			<Text style={styles.text}>{count}</Text>
			<TouchableOpacity style={styles.button} onPress={reset}>
				<Text style={styles.buttonText}>Reset</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					navigation.navigate('Details', {
						itemId: 86,
						otherParam: 'anything you want here'
					})}
			>
				<Text style={styles.buttonText}>Details</Text>
			</TouchableOpacity>
		</View>
	);
}

function DetailsScreen({ route, navigation }) {
	const { itemId, otherParam } = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					navigation.push('Details', {
						itemId: Math.floor(Math.random() * 100)
					})}
			>
				<Text style={styles.buttonText}>Details</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
				<Text style={styles.buttonText}>Go to Home</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
				<Text style={styles.buttonText}>Go Back</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
				<Text style={styles.buttonText}>Pop to Top</Text>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF6663',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 30,
		color: '#0B3954'
	},
	button: {
		margin: 20,
		color: '#FF6663',
		backgroundColor: '#0B3954',
		padding: 20,
		borderRadius: 15,
		fontSize: 30
	},
	buttonText: {
		fontSize: 30,
		color: '#FF6663'
	}
});
