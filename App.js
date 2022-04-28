import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");
  // console.log(require('./assets/icon.png'))

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World! Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </Text>
      <TouchableOpacity onPress={() => console.log("image tapped!")}>
        <Image blurRadius={1} source={require("./assets/favicon.png")} />
      </TouchableOpacity>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          // Alert.alert("Hey!", "How are you?", [
          //   { text: "Good", onPress: () => console.log("Good Pressed") },
          //   { text: "Bad", onPress: () => console.log("Bad Pressed") },
          // ])
          Alert.prompt('Tell me something funny', 'Message', msg => console.log(msg) )
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
