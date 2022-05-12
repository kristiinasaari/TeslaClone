//import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Home from './components/Screens/Home';
import { NavigationContainer } from'@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs'
import Map from './components/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Car models') {
              iconName = focused
                ? 'md-car-sport'
                : 'md-car-sport-outline';
            } else if (route.name === 'Store location') {
              iconName = focused ? 'md-map' : 'md-map-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#171A20CC',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
        >
        <Tab.Screen name="Car models" component={Home} />
        <Tab.Screen name="Store location" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
