import react from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";
import { NavigationContainer } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CarList = (props) => {
    return (
        <View style={styles.container}>
        <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
        />
        </View>
    );
};

export default CarList;