import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* {today tasks} */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks</Text>

        <View style={styles.items}>
          {/* {tasks will go here} */}
          <Task text={"First task"} />
          <Task text={"Second task"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
