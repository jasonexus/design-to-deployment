import {Text, StyleSheet, View} from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the about page!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    text: {
        color: '#fff',
    }
})