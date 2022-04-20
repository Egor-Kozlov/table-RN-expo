import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from "react-native";
import React, { useCallback } from "react";
import data from "./data";

const cycle = (obj) => {};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Table = () => {
  const renderItem = useCallback(({ item }) => {
    // const values = Object.values(item);

    return (
      <View style={{ borderWidth: 2, flexDirection: "row" }}>
        {/* {values.map((element) => (
          <Item title={element} />
        ))} */}
        <Item title={item.balance} />
        <Item title={item.age} />
        <Item title={item.eyeColor} />
        <Item title={item.name} />
        <Item title={item.gender} />
        <Item title={item.email} />
        <Item title={item.phone} />
        <Item title={item.address} />
        <Item title={item.about} />
      </View>
    );
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Table</Text>
        <ScrollView style={styles.tableContainer} horizontal={true}>
          <FlatList style={styles.listContainer} data={data} renderItem={renderItem} keyExtractor={(item) => item._id} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Table;

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 70,
    borderWidth: 1,
  },
  container: {},
  listContainer: {
    padding: 20,
  },
});
