import { StatusBar } from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
  View,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");
  // console.log(require('./assets/icon.png'))
  console.log(Dimensions.get("screen"));
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{ backgroundColor: "dodgerblue", width: '50%', height: landscape ? '100%' : 70, }}
    //   ></View>
    //   <Text numberOfLines={1} onPress={handlePress}>
    //     Hello World! Lorem Ipsum is simply dummy text of the printing and
    //     typesetting industry. Lorem Ipsum has been the industry's standard dummy
    //   </Text>
    //   <TouchableOpacity onPress={() => console.log("image tapped!")}>
    //     <Image blurRadius={1} source={require("./assets/favicon.png")} />
    //   </TouchableOpacity>
    //   <Button
    //     color="orange"
    //     title="Click Me"
    //     onPress={() =>
    //       // Alert.alert("Hey!", "How are you?", [
    //       //   { text: "Good", onPress: () => console.log("Good Pressed") },
    //       //   { text: "Bad", onPress: () => console.log("Bad Pressed") },
    //       // ])
    //       Alert.prompt("Tell me something funny", "Message", (msg) =>
    //         console.log(msg)
    //       )
    //     }
    //   />
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ backgroundColor: "dodgerblue", width: 100, height: 300,}} />
      <View style={{ backgroundColor: "gold", width: 100, height: 200, }} />
      <View style={{ backgroundColor: "tomato",width: 100, height: 100,}} />

    </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
