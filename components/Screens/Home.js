import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
//import MapView from 'react-native-maps';
//import CarItem from './components/CarItem';
import CarsList from '../CarsList'
import Header from '../Header';


const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});