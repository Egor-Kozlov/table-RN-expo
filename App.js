import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login/Login";
import Table from "./screens/Table/Table";

export default function App() {
  return (
    <View>
      {/* <Login /> */}
      <Table />
    </View>
  );
}
