import { StyleSheet, Dimensions } from "react-native";
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
      container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        flex: 1,
        width: "100%",
        height: 200
      }
});

export default styles;