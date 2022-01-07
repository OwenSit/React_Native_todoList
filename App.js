import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // useState to temporary store the event
  const [event, setEvent] = useState("");

  const handleAddEvent = () => {
    console.log(event);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text
          style={{
            fontFamily: "AmericanTypewriter-Light",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          <Text style={{ color: "green" }}>What</Text>
          <Text style={{ color: "red" }}>To</Text>
          <Text style={{ color: "blue" }}>Do</Text>
          <Text style={{ color: "yellow" }}>?</Text>
        </Text>
      </View>
      <View style={styles.prompt}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>add an item:</Text>
        <TextInput
          style={styles.input}
          keyboardAppearance="dark"
          placeholder="e.g. Buy some flowers🌷"
          maxLength={40}
          clearButtonMode="while-editing"
          returnKeyType="done"
          returnKeyLabel="Add"
          onChangeText={(val) => {
            setEvent(val);
          }}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleAddEvent(event)}
        >
          <Text>Add!</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  heading: {
    marginTop: 25,
  },
  prompt: {
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: "yellow",
  },
  submitButton: {
    borderWidth: 2,
    backgroundColor: "green",
    padding: 6,
    borderRadius: 10,
  },
});
