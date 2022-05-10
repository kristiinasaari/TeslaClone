import React from "react";
import { View, Text, ImageBackground } from "react-native";
import MapView, {Marker} from "react-native-maps";
import styles from "./styles";

const Map = () => {


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 60.27025423561173,
                    longitude: 24.878098679074192,
                }}
            />
        </View>

    );
};

export default Map;