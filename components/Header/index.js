import react from "react";
import { View, Image, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import CarItem from "../CarItem";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};

export default Header;