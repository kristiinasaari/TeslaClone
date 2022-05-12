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
                    latitude: 60.270148,
                    longitude: 24.878029,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                    }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                provider={MapView.PROVIDER_GOOGLE}
                    >
                <Marker
                    coordinate={{
                        latitude: 60.270148,
                        longitude: 24.878029,
                    }}
                    title='Tesla store' />
            </MapView>


        </View>

    );
}

export default Map;