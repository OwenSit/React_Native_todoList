import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  // useState to temporary store the event
  const [event, setEvent] = useState("");

  const handleAddEvent = () => {
    let len = list.length;
    let newID = 0;
    if (len === 0) {
      newID = 1;
    } else {
      newID = list[len - 1].id + 1;
    }
    let newEvent = { event: event, id: newID };
    let newList = list;
    newList.push(newEvent);
    console.log(len);
    setList(newList);
    alert("Item added!");
  };

  // useState to store the todo list
  const [list, setList] = useState([
    { event: "buy a book📔", id: "1" },
    { event: "pickup Andy👦🏻", id: "2" },
    { event: "visit Mr.Joe👨", id: "3" },
    { event: "return CD player💿", id: "4" },
    { event: "mail the postcard📮", id: "5" },
    { event: "get some gas⛽", id: "6" },
    { event: "book a ticket🎫", id: "7" },
  ]);

  // function used to rendering the flatlist:
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => deleteItem(item.id)}>
      <Text style={styles.item}>{item.event}</Text>
    </TouchableOpacity>
  );

  const deleteItem = (id) => {
    setList((oldList) => {
      return oldList.filter((list) => list.id != id);
    });
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
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderItem}
        style={styles.list}
      />
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
  list: {
    marginTop: 20,
  },

  item: {
    marginTop: 24,
    padding: 15,
    backgroundColor: "#807689",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
    textAlign: "center",
  },
});
