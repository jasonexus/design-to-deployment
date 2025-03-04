import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MicVocal } from "lucide-react-native";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.logo}>
            <MicVocal size={24} color="white" />
            <Text style={styles.header}>encore.</Text>
          </View>
          <View>
            <Text style={styles.subtext}>Your Concert, Your Vibe.</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => router.push("/about")}>
              <Text style={styles.button}>Go to About</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
  },
  subtext: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "semibold",
    textAlign: "center",
    letterSpacing: -2,
    padding: 60,
    position: "absolute",
    top: 50,
    right: 0,
    left: 0,
  },
  button: {
    color: "black",
    fontSize: 16,
    backgroundColor: "white",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 4,
    fontWeight: "semibold",
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
});
