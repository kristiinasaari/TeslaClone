import React from "react";
import { View, Text, ImageBackground, Linking } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
import MapView from "react-native-maps";
import { NavigationContainer } from'@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs'

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;
    

    return (
        <View style={styles.carContainer}>

            <ImageBackground 
            source={image} 
            style={styles.image}
            />

            
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

                <View style={styles.buttonsContainer}>
                <StyledButton type="primary" content={"Custom order"} onPress={() => {
                    Linking.openURL('https://www.tesla.com/');
                }}
                />

                <StyledButton 
                    type="secondary" 
                    content={"Existing inventory"} 
                    onPress={() => {
                        Linking.openURL('https://www.tesla.com/')}}
                />
            </View>

        </View>

    );
};

export default CarItem;