import react from "react";
import { View, Image, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import CarItem from "../CarItem";
import { NavigationContainer } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            
        </View>
    );
};

export default Header;